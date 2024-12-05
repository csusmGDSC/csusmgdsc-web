import ResourceCard from "./resource-card";

const ResourceCards = () => {
  return (
    <section className="w-full flex-center-col">
      <div className="custom-max-width space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ResourceCard
            title="CSUSM Merch"
            subtitle="Check out our GDSC-CSUSM merch"
            href="/merch"
            imageSrc="https://placehold.co/600x400"
          />
          <ResourceCard
            title="Brand Guidelines & Logo"
            subtitle="Check out our brand guidelines"
            href="/brand-guidelines"
            imageSrc="https://placehold.co/600x400"
          />
          <ResourceCard
            title="CSU San Marcos"
            subtitle="Check out our university"
            href="https://www.csusm.edu/index.html"
            imageSrc="https://placehold.co/600x400"
          />
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
