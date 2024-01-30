const CampSite = () => {
  return <div>Camp Site 1</div>;
};

function Camp() {
  return (
    <section className=" border-2 border-green-500 2x1:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]"></div>
      <CampSite
        backgroundImage="bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peopleJoined="50+ Joined"
      />
      <CampSite />
    </section>
  );
}

export default Camp;
