import Image from "next/image";
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/components/Logo";

export default function Home() {

  const socials = [
    { key: 'ig', text: 'Instagram', href: 'https://instagram.com/dancesport.live', icon: faInstagram },
    { key: 'gh', text: 'GitHub', href: 'https://github.com/dancesport-live', icon: faGithub },
    { key: 'li', text: 'LinkedIn', href: 'https://linkedin.com/company/dancesport-live', icon: faLinkedin },
  ]

  const boxes = [
    { key: 'about', title: 'About', href: '#',
      text: 'Learn more about what DanceSport.live is, our values, mission and goals.' },
    { key: 'projects', title: 'Projects', href: 'https://github.com/dancesport-live',
      text: 'Find out what we are doing and how you can benefit from or contribute to our work.' },
    { key: 'team', title: 'Team', href: '#',
      text: 'Get to know the project team and advisory board members.' }
  ]

  return (
    <main className="flex flex-col min-h-screen items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="relative flex flex-col place-items-center">
          <h1><Logo /></h1>
          <ul className="flex flex-row mt-4">
            { socials.map(item => { return (
              <li key={item.key}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={item.icon} width={35} height={25} />
                  <span className="hidden">{ item.text }</span>
                </a>
              </li>
            )}) }
          </ul>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        { boxes.map(item => {
          return (
            <Link
              href={item.href}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              rel="noopener noreferrer"
              key={item.key}
            >
              <h2 className={`mb-3 text-2xl font-semibold`}>
                {item.title}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {item.text}
              </p>
            </Link>
          )
        }) }
      </div>
    </main>
  );
}
