const Hero = ({ heading, intro }: { heading: string; intro: string }) => {
  return (
    <section >
      <div>
        <h1>{heading}</h1>
        <p>
          {intro}
        </p>
      </div>
    </section>
  );
};

export default Hero;
