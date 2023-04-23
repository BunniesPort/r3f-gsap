import { Scroll } from "@react-three/drei";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "text-right" : "text-left"
      }`}
    >
      {props.children}
    </section>
  );
};

export const Overlay = () => {
  return (
    <Scroll html>
      <div className="w-screen">
        <Section>
          <h1 className="font-semibold text-6xl"> Hello R3F!</h1>
          <p className="to-gray-500">Welcome to my beautiful web site.</p>
          <p className="mt-3">I know:</p>
          <ul className="leading-9">
            <li>🧑‍💻 How to code</li>
            <li>🧑‍🏫 How to learn</li>
            <li>📦 How to deliver</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>

        <Section right>
          <h1 className="font-bold text-4xl ">Here's my skillsets</h1>
          <p className="text-gray-500 ">PS: I never test.</p>
          <p className="mt-3 text-2xl">
            <b>Frontend 🚀</b>
          </p>
          <ul className="leading-9">
            <li>React JS</li>
            <li>React Native</li>
            <li>VueJS</li>
            <li>Tailwind</li>
          </ul>
          <p className="mt-3 text-2xl">
            <b>Backend 🔬</b>
          </p>
          <ul className="leading-9">
            <li>NodeJS</li>
            <li>tRPC</li>
            <li>NestJS</li>
            <li>PostgreSQL</li>
          </ul>
          <p className="animate-bounce mt-6">↓</p>
        </Section>
        <Section>
          <h1 className="font-semibold text-3xl">🤙 Call me maybe?</h1>
          <p className="to-gray-500">
            I'm very expensive but you won't regretit
          </p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📞 <a href="tel:(+81) 080-1234-5678">(+81) 080-1234-5678</a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
