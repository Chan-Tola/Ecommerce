const Footer = () => {
  const datatexting = [
    "TEN11 App",
    "Follow Us",
    "Customer Services",
    "We Accept",
  ];
  return (
    <>
      <main className="bg-[#20232A] w-full">
        {/* Main section */}
        <section className="place-items-center grid grid-cols-4 w-[1023px] p-[10px]">
          {datatexting.map((txt) => {
            return (
              <section className="cursor-pointer">
                <h1 className="text-sm">{txt}</h1>
              </section>
            );
          })}
        </section>
        <section className="text-center w-full bg-[#191919]">
          <h6>Powered By TEN11 © 2024</h6>
        </section>
      </main>
    </>
  );
};

export default Footer;
