import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface MemberRow {
  id: string;
  full_name: string | null;
  user_id: string;
  created_at: string;
  isAdmin: boolean;
}

export interface EventRow {
  id: string;
  title: string;
  date: string;
  location: string | null;
}

export const useAdminDashboardData = () => {
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [totalMembers, setTotalMembers] = useState(0);
  const [activeEvents, setActiveEvents] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const PAGE_SIZE = 10;

  const fetchData = async (search = "") => {
    setLoading(true);

    // Count total members
    const { count: memberCount } = await supabase
      .from("profiles")
      .select("*", { count: "exact", head: true });

    setTotalMembers(memberCount ?? 0);

    // Fetch members with pagination + search
    let membersQuery = supabase
      .from("profiles")
      .select("id, full_name, user_id, created_at")
      .order("created_at", { ascending: false })
      .range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);

    if (search) {
      membersQuery = membersQuery.ilike("full_name", `%${search}%`);
    }

    const { data: profilesData } = await membersQuery;

    // Get admin user IDs
    const { data: adminRoles } = await supabase
      .from("user_roles")
      .select("user_id")
      .eq("role", "admin");

    const adminUserIds = new Set((adminRoles ?? []).map((r) => r.user_id));

    const enrichedMembers: MemberRow[] = (profilesData ?? []).map((p) => ({
      ...p,
      isAdmin: adminUserIds.has(p.user_id),
    }));

    setMembers(enrichedMembers);

    // Active events (date >= today)
    const now = new Date().toISOString();
    const { count: eventsCount } = await supabase
      .from("events")
      .select("*", { count: "exact", head: true })
      .gte("date", now);

    setActiveEvents(eventsCount ?? 0);

    // Upcoming events for sidebar
    const { data: eventsData } = await supabase
      .from("events")
      .select("id, title, date, location")
      .gte("date", now)
      .order("date", { ascending: true })
      .limit(5);

    setUpcomingEvents((eventsData as EventRow[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return {
    members,
    totalMembers,
    activeEvents,
    upcomingEvents,
    loading,
    page,
    setPage,
    PAGE_SIZE,
    refetch: fetchData,
  };
};
