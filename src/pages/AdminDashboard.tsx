import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useAdminCheck } from "@/hooks/useAdminCheck";
import {
  LayoutDashboard, Users, CalendarDays, BarChart3, Megaphone,
  Settings, LogOut, Download, PlusCircle, Search, MoreVertical,
  Mail, UserPlus, FileText, Zap
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Members" },
  { icon: CalendarDays, label: "Events" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Megaphone, label: "Announcements" },
];

const stats = [
  { icon: Users, label: "Total Members", value: "1,240", change: "+12%", positive: true, bg: "bg-primary/10", iconColor: "text-primary" },
  { icon: CalendarDays, label: "Active Events", value: "8", change: "Steady—", positive: null, bg: "bg-amber-50", iconColor: "text-amber-500" },
  { icon: Zap, label: "Monthly Revenue", value: "$4,850", change: "+5.2%", positive: true, bg: "bg-purple-50", iconColor: "text-purple-500" },
  { icon: Zap, label: "Engagement Rate", value: "68.4%", change: "-2%", positive: false, bg: "bg-purple-50", iconColor: "text-purple-500" },
];

const members = [
  { name: "Sarah Jenkins", dept: "Entrepreneurship", status: "ACTIVE", joined: "Oct 12, 2023", avatar: "SJ" },
  { name: "David Chen", dept: "Sports", status: "ACTIVE", joined: "Oct 10, 2023", avatar: "DC" },
  { name: "Elena Rodriguez", dept: "Culture", status: "PENDING", joined: "Oct 09, 2023", avatar: "ER" },
  { name: "Marcus Thorne", dept: "Sports", status: "ACTIVE", joined: "Oct 05, 2023", avatar: "MT" },
];

const quickActions = [
  { icon: Megaphone, label: "Announce", bg: "bg-accent" },
  { icon: Mail, label: "Message All", bg: "bg-accent" },
  { icon: UserPlus, label: "Invite", bg: "bg-accent" },
  { icon: FileText, label: "Invoices", bg: "bg-accent" },
];

const upcomingEvents = [
  { month: "OCT", day: "24", title: "Startup Pitch Night", location: "Innovation Hall • 6:00 PM" },
  { month: "OCT", day: "28", title: "Inter-Uni Basketball", location: "Sports Complex • 10:00 AM" },
];

const AdminDashboard = () => {
  const { user, signOut } = useAuth();
  const { isAdmin, loading } = useAdminCheck();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-muted">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-foreground font-sans">Access Denied</h2>
          <p className="text-muted-foreground">You don't have admin privileges.</p>
          <Button onClick={() => navigate("/")} variant="outline">Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-muted/50 font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-background border-r border-border flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 px-5 py-5">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">VH</span>
            </div>
            <div>
              <div className="font-bold text-sm text-foreground leading-tight">VibeHub Club</div>
              <div className="text-[11px] text-muted-foreground uppercase tracking-wider">Admin Panel</div>
            </div>
          </div>

          <nav className="mt-2 px-3 space-y-1">
            {sidebarLinks.map((link) => (
              <button
                key={link.label}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  link.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <link.icon size={18} />
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="px-3 pb-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Settings size={18} />
            Settings
          </button>
          <div className="flex items-center gap-3 px-3 py-3 border-t border-border">
            <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs font-bold text-primary">
              {user?.user_metadata?.full_name?.[0] || "A"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">
                {user?.user_metadata?.full_name || "Admin"}
              </div>
              <div className="text-[11px] text-muted-foreground">Super Admin</div>
            </div>
            <button onClick={signOut} className="text-muted-foreground hover:text-foreground">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground font-sans">Executive Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Overview of VibeHub's Sports, Culture, and Entrepreneurship wings.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <Download size={16} />
              Export Report
            </Button>
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
              <PlusCircle size={16} />
              Create Event
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="px-8 grid grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background rounded-xl border border-border p-5">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 ${stat.bg} rounded-lg flex items-center justify-center`}>
                  <stat.icon size={20} className={stat.iconColor} />
                </div>
                {stat.positive !== null && (
                  <span className={`text-xs font-medium ${stat.positive ? "text-green-500" : "text-red-500"}`}>
                    {stat.change}
                    <span className="ml-0.5">↗</span>
                  </span>
                )}
                {stat.positive === null && (
                  <span className="text-xs font-medium text-muted-foreground">{stat.change}</span>
                )}
              </div>
              <div className="mt-3">
                <div className="text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-2xl font-bold text-foreground mt-0.5">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="px-8 mt-6 flex gap-6 pb-8">
          {/* Members Table */}
          <div className="flex-1 bg-background rounded-xl border border-border">
            <div className="flex items-center justify-between p-5 pb-4">
              <h2 className="text-lg font-bold text-foreground font-sans">Recent Members</h2>
              <div className="relative w-56">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search members..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 h-9"
                />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Member</TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Department</TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Joined</TableHead>
                  <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {members.map((member) => (
                  <TableRow key={member.name}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                          {member.avatar}
                        </div>
                        <span className="font-medium text-foreground">{member.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{member.dept}</TableCell>
                    <TableCell>
                      <Badge
                        variant={member.status === "ACTIVE" ? "default" : "secondary"}
                        className={`text-[10px] font-semibold ${
                          member.status === "ACTIVE"
                            ? "bg-primary/15 text-primary hover:bg-primary/20 border-0"
                            : "bg-amber-100 text-amber-700 hover:bg-amber-100 border-0"
                        }`}
                      >
                        {member.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{member.joined}</TableCell>
                    <TableCell>
                      <button className="text-muted-foreground hover:text-foreground">
                        <MoreVertical size={16} />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="flex items-center justify-between p-4 border-t border-border">
              <span className="text-sm text-muted-foreground">Showing 4 of 1,240 members</span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">Next</Button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-72 space-y-6">
            {/* Quick Actions */}
            <div className="bg-background rounded-xl border border-border p-5">
              <h3 className="text-lg font-bold text-foreground font-sans mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action) => (
                  <button
                    key={action.label}
                    className={`${action.bg} rounded-xl p-4 flex flex-col items-center gap-2 hover:opacity-80 transition-opacity`}
                  >
                    <action.icon size={22} className="text-primary" />
                    <span className="text-xs font-medium text-foreground">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-background rounded-xl border border-border p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground font-sans">Upcoming Events</h3>
                <button className="text-xs font-medium text-primary hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="flex items-center gap-3">
                    <div className="w-12 h-14 bg-destructive/10 rounded-lg flex flex-col items-center justify-center">
                      <span className="text-[10px] font-bold text-destructive uppercase">{event.month}</span>
                      <span className="text-lg font-bold text-destructive leading-tight">{event.day}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{event.title}</div>
                      <div className="text-xs text-muted-foreground">{event.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
