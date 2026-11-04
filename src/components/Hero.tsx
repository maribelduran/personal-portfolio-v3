const Hero = ({ heading, intro }: { heading: string; intro: string }) => {
  return (
    <section id="center">
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
