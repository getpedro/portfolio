import Head from "next/head";
import Image from "next/image";
import { GitHub, Instagram, Linkedin, Moon, Sun } from "react-feather";
import { useTheme } from "next-themes";
import positions from "../data/positions";
import tags from "../data/tags.json";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Head>
        <title>Pedro Amaral - Principal Developer {"&"} Consultant</title>
        <meta
          name='description'
          content='Pedro Amaral'
        />
      </Head>

      <div
        className='w-full h-96'
        style={{
          backgroundImage: "url(img/banner.jpg)",
          backgroundPosition: "center",
        }}
      />

      <div className='relative bg-white dark:bg-gray-900 dark:text-gray-50 p-8 xl:p-12 mx-auto xl:w-1/2 2xl:w-[750px] -mt-48 rounded-xl shadow-xl dark:shadow-none dark:border dark:border-gray-800 mb-12'>
        <button
          onClick={toggleTheme}
          className='right-12 absolute hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 p-2 rounded-2xl transition'
        >
          {theme === "dark" ? <Sun size={21} /> : <Moon size={21} />}
        </button>

        {/* --- MAIN INFORMATION SECTION --- */}
        <div className='border-b dark:border-gray-700 pb-10'>
          <Image
            width='128px'
            height='128px'
            src='/img/pedro_amaral.jpeg'
            alt='Pedro Amaral'
            className='rounded-full'
          />

          <h1 className='text-3xl font-extrabold tracking-tight mt-3 mb-1'>
            Pedro Amaral
          </h1>
          <h2 className='text-gray-500 dark:text-gray-400'>
            Principal Developer  · Consultant  · Vim Lover
          </h2>

          <div className='flex space-x-3 mt-3 mb-12'>
            {tags.map((t, i) => (
              <div
                key={i}
                className='py-1 px-3 text-sm bg-yellow-100 dark:bg-transparent dark:border dark:border-yellow-100 text-yellow-700 dark:text-yellow-100 rounded-2xl '
              >
                {t}
              </div>
            ))}
          </div>

          <h3 className='font-bold text-2xl'>Hey there,</h3>
          <p className='mt-5 prose dark:prose-dark'>
            I'm currently working as lead developer at {" "}
            <a rel='noopener' href='https://cvc.com.br' target='_blank'>
              CVC Viagens.
            </a>
            <p>
              Developer with refactoring habit. Like to learn, teach, help and solve mathematical/logical problems.
            </p>
          </p>

          <div className='flex space-x-5 mt-5'>
            <a
              rel='noopener'
              className='hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition'
              href='https://instagram.com/pedro.amrl'
              target='_blank'
            >
              <Instagram size={26} />
            </a>
            <a
              rel='noopener'
              className='hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition'
              href='https://www.linkedin.com/in/getderivedpedro/'
              target='_blank'
            >
              <Linkedin size={26} />
            </a>
            <a
              rel='noopener'
              className='hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-2xl transition'
              href='https://github.com/piamrl'
              target='_blank'
            >
              <GitHub size={26} />
            </a>
          </div>
        </div>

        {/* --- END OF MAIN INFORMATION SECTION --- */}

        {/* --- START OF POSITIONS --- */}
        <div className='mt-12'>
          <h3 className='font-bold text-2xl mb-3'>Work</h3>

          {positions.map((p, i) => (
            <div className='hover:bg-gray-50 dark:hover:bg-gray-800 flex items-start border-b dark:border-gray-700 py-5 px-2'>
              <div className='inline-flex min-w-[40px]'>
                <Image
                  src={p.img}
                  className='rounded-md'
                  width='40px'
                  height='40px'
                  alt={p.title}
                />
              </div>

              <div className='ml-5'>
                <h4 className='font-semibold'>{p.title}</h4>
                <p className='text-gray-500 dark:text-gray-400 text-sm'>
                  {p.desc}
                </p>
                {p.doing && (
                  <p className='text-gray-500 dark:text-gray-400 leading-normal text-sm mt-2'>
                    {p.doing}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* --- END OF POSITIONS --- */}
      </div>
    </div>
  );
}
