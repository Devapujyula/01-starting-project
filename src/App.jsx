import reactImg from './assets/react-core-concepts.png'

const reactDescription = ['Fundamental', 'Crucial', 'Core']

function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}


function Welcome() {
  const description = reactDescription[getRandom(2)]
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} concepts you will need for alomost any app you are going to build
    </p>
    </header>
  )
}


function App() {
  return (
    <div>
    <Welcome />
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
