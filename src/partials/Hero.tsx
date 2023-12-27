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
          Hi there, I'm <GradientText>Inushin</GradientText> 👋
        </>
      }
      description={
        <>
          Well let me be more "personal". Mi name is{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.linkedin.com/in/aitor-sobera-ortiz-de-z%C3%A1rate-745aa66b/"
          >
            Aitor Sobera Ortiz de Zárate
          </a>
          , a 28 years old guy who works as FullStack developer from Spain. At
          this moment, I am working with{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          >
            JavaScript
          </a>{" "}
          and{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          >
            TypeScript
          </a>{" "}
          as primary programming languages. Apart fromt this, I am a{" "}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.docker.com/"
          >
            Docker
          </a>{" "}
          lover.{" "}
        </>
      }
      avatar={
        <img
          className="h-75 w-64 rounded-full"
          src="/assets/images/avatar.jpeg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="mailto:aitorthedeveloper@gmail.com">
            <HeroSocial src="/assets/images/email-icon.png" alt="Email icon" />
          </a>
          <a href="https://twitter.com/inushin95">
            <HeroSocial src="/assets/images/x-icon.png" alt="X icon" />
          </a>
          <a href="https://noc.social/@inushin">
            <HeroSocial
              src="/assets/images/mastodon-icon.png"
              alt="Mastodon icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/aitor-sobera-ortiz-de-z%C3%A1rate-745aa66b/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
