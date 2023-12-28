import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Me presento: soy <GradientText>Inushin</GradientText> 👋
        </>
      }
      description={
        <>
          Bueno... seamos algo más "personales". Me llamo{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.linkedin.com/in/aitor-sobera-ortiz-de-z%C3%A1rate-745aa66b/"
          >
            Aitor Sobera Ortiz de Zárate
          </a>
          , un desarrollador FullStack de 28 años que vive en España.
          Actualmente trabajo con{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          >
            JavaScript
          </a>{" "}
          y{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          >
            TypeScript
          </a>{" "}
          como principales lenguajes de programación. Además, soy un enamorado
          de{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.docker.com/"
          >
            Docker
          </a>{" "}
          y de otras tecnologías que seguro iremos recogiendo por aquí.{" "}
        </>
      }
      avatar={
        <img
          className="h-75 w-64 rounded-full"
          src="/assets/images/avatar.jpeg"
          alt="Imagen Avatar"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="mailto:aitorthedeveloper@gmail.com">
            <HeroSocial src="/assets/images/email-icon.png" alt="Icono Email" />
          </a>
          <a href="https://twitter.com/inushin95">
            <HeroSocial src="/assets/images/x-icon.png" alt="Icono X" />
          </a>
          <a href="https://noc.social/@inushin">
            <HeroSocial
              src="/assets/images/mastodon-icon.png"
              alt="Icono Mastodon"
            />
          </a>
          <a href="https://www.linkedin.com/in/aitor-sobera-ortiz-de-z%C3%A1rate-745aa66b/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Icono LinkedIn"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
