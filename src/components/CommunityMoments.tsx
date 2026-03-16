import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const CommunityMoments = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">Community Moments</h2>
          <p className="text-muted-foreground mt-2">Glimpses into our vibrant club life</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-xl overflow-hidden border-4 border-primary/20 aspect-square">
              <img src={img} alt={`Community moment ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityMoments;
