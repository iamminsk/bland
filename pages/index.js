import { Section } from "../components/Section";

export default function Home() {
  return (
    <div>
      <main style={{ position: "relative" }}>
        <span
          style={{
            position: "fixed",
            zIndex: 10,
            color: "#fff",
            fontSize: 50,
            bottom: 0,
          }}
        >
          But Men Must Work and Women Must Weep
          <span style={{ fontSize: 20 }}> Walter Langley</span>
        </span>
        <Section
          bgColor="#606D5D"
          imgSrc="https://images.unsplash.com/photo-1578925773717-a41e4a7fa4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80"
          title="But Men Must Work and Women Must Weep"
          artist="Walter Langley"
        />
        <Section
          bgColor="#BC9CB0"
          imgSrc="https://images.unsplash.com/photo-1577080824802-0ee1809c937b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1564&q=80"
          title="Sigismonda Drinking The Poison"
          artist="Joseph Edward Southall"
        />
        <Section
          bgColor="#88958D"
          imgSrc="https://images.unsplash.com/photo-1576504677598-49a46e4b7abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1594&q=80"
          title="Portrait of Sir Edward Burne-Jones"
          artist="George Frederic Watts"
        />
        <Section
          bgColor="#88958D"
          imgSrc="https://images.unsplash.com/photo-1577720643272-265f09367456?ixlib=rb-1.2.1&auto=format&fit=crop&w=1545&q=80"
          title="Portrait of Sir Edward Burne-Jones"
          artist="George Frederic Watts"
        />
        <Section
          bgColor="#88958D"
          imgSrc="https://images.unsplash.com/photo-1576769782086-7fdab84bca2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1554&q=80"
          title="Portrait of Sir Edward Burne-Jones"
          artist="George Frederic Watts"
        />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Orkney Light", serif;
        }

        h2 {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: "Orkney Regular";
          font-style: normal;
          font-weight: 300;
          src: url("/fonts/orkney-regular.otf");
        }
        @font-face {
          font-family: "Orkney Light";
          font-style: light;
          font-weight: 200;
          src: url("/fonts/orkney-light.otf");
        }
      `}</style>
    </div>
  );
}
