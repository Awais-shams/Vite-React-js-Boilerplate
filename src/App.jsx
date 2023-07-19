import Boilerplate from '@assets/vite-react-js-boilerplate.png';
import LinkButton from '@components/LinkButton';
import { UilGithub, UilLinkedin } from '@iconscout/react-unicons';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="w-1/2">
        <img
          src={Boilerplate}
          alt="Vite-React-js-Boilerplate"
          className="mx-auto mb-4 h-auto w-full"
        />
        <div className="flex justify-center gap-4">
          <LinkButton
            href="https://github.com/Awais-shams/Vite-React-js-Boilerplate"
            icon={<UilGithub />}
            label="Github"
          />
          <LinkButton
            href="https://www.linkedin.com/in/awais-shamas/"
            icon={<UilLinkedin />}
            label="LinkedIn"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
