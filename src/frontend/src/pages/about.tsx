import Image from "next/image";
import "../styles/globals.css";

export default function About() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      <header className="flex justify-between bg-purple-800 p-3">
        <nav>
          <ul className="flex space-x-2">
            {[
              { href: "/", label: "Home", icon: "icon-home.svg" },
              { href: "blog", label: "Blog", icon: "icon-blog.svg" },
              { href: "custom", label: "Custom", icon: "icon-custom.svg" },
              { href: "mods", label: "Mods", icon: "icon-mods.svg" },
              { href: "artists", label: "Artists", icon: "icon-artists.svg" },
              { href: "faq", label: "F.A.Q.", icon: "icon-faq.svg" },
              { href: "about", label: "About", icon: "icon-about.svg" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-white p-2 hover:text-black text-lg"
                >
                  <Image
                    src={`/images/icons/${item.icon}`}
                    alt={item.label}
                    width={32}
                    height={32}
                    className="inline-block mr-1 filter brightness-0 invert"
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex justify-center items-center bg-lavender p-5 text-gray-800">
        <div className="bg-white p-5 rounded text-center">
          <table className="w-full border-collapse mb-0 shadow-lg border-2 border-gray-300 rounded-lg">
            <thead>
              <tr>
                <th className="border-2 p-2 text-lg bg-gray-100">
                  Полное наименование
                </th>
                <th className="border-2 p-2 text-lg bg-gray-100">
                  ИП Колесов Арсений Дмитриевич
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { label: "ОГРНИП", value: "324723200015923" },
                { label: "ИНН", value: "890306202170" },
                {
                  label: "ОКВЭД",
                  value: "32.20 47.91.2 58.21 58.29 62.01 63.11.1 63.12",
                },
                { label: "Расчётный счёт", value: <b>40802810400006021068</b> },
                {
                  label: "Корреспондентский счёт",
                  value: "30101810145250000974",
                },
                {
                  label: "БИК банка",
                  value: "044525974",
                  isLink: true,
                  link: "https://www.tbank.ru",
                  imgSrc: "/images/wallets/t-bank.svg",
                },
                {
                  label: "Криптовалютные кошельки",
                  value: (
                    <>
                      <div className="wallet-info">
                        <center>
                          <a
                            href="https://ton.org/ru/toncoin"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/images/wallets/ton.svg"
                              alt="TON"
                              width={128}
                              height={128}
                              className="w-20"
                            />
                          </a>
                        </center>
                        <b>UQB44yodNzTEwrPnkzIAIeRo2D3Q3AHQIdaeW1gUwZVk_qXt</b>
                      </div>
                      <br />
                      <div className="wallet-info">
                        <center>
                          <a
                            href="https://bitcoin.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/images/wallets/bitcoin.svg"
                              alt="Bitcoin"
                              width={128}
                              height={128}
                              className="w-26"
                            />
                          </a>
                        </center>
                        <b>17QqMUTyEWnU4aogKuXDTANbuT3iJPo9zx</b>
                      </div>
                      <br />
                      <div className="wallet-info">
                        <center>
                          <a
                            href="https://tether.to"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Image
                              src="/images/wallets/tether.svg"
                              alt="Tether"
                              width={128}
                              height={128}
                              className="w-26"
                            />
                          </a>
                        </center>
                        (TON/USDT):{" "}
                        <b>UQCGAg4z7YMbwkbVm25Gaq8OXDCYkiNQU2xg9k5BILfPG48H</b>
                      </div>
                    </>
                  ),
                },
              ].map((item) => (
                <tr key={item.label}>
                  <td className="border-2 p-2 text-lg">{item.label}</td>
                  <td className="border-2 p-2 text-lg">
                    {item.isLink ? (
                      <center>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={item.imgSrc}
                            alt="T-Bank"
                            width={128}
                            height={128}
                            className="w-22"
                          />
                        </a>
                        <b>{item.value}</b>
                      </center>
                    ) : (
                      item.value
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-center space-x-2 mt-4">
            {[
              {
                href: "https://t.me/priscilla_ef/10",
                imgSrc: "/images/sns/tg-logo.svg",
                alt: "Telegram",
              },
              {
                href: "https://vk.com/priscilla_ef",
                imgSrc: "/images/sns/vk-logo.svg",
                alt: "VK",
              },
              {
                href: "https://www.instagram.com/masajinobe/",
                imgSrc: "/images/sns/inst-logo.svg",
                alt: "Instagram",
              },
              {
                href: "https://twitter.com/priscilla_eF",
                imgSrc: "/images/sns/x-logo.svg",
                alt: "Twitter",
              },
              {
                href: "https://boosty.to/priscilla-custom-effects",
                imgSrc: "/images/sns/boosty-logo.svg",
                alt: "Boosty",
              },
              {
                href: "https://www.youtube.com/channel/UCVJiYZ7oiHdBnkkOoSrse3Q",
                imgSrc: "/images/sns/yt-logo.svg",
                alt: "YouTube",
              },
              {
                href: "https://github.com/Priscilla-Custom-Effects",
                imgSrc: "/images/sns/git-logo.svg",
                alt: "Github",
              },
            ].map((item) => (
              <a
                key={item.alt}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.imgSrc}
                  alt={item.alt}
                  width={64}
                  height={64}
                  className="w-14"
                />
              </a>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-purple-800 text-white text-center p-3">
        <p className="text-lg">
          Pedals... or something like this🌌
          <br />
          ・Custom Effects ・Modifications ・Hi-End Musical Accessories ・Resale
        </p>
      </footer>
    </div>
  );
}
