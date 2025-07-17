import React, { useState } from 'react';

const App = () => {
  const [activeMember, setActiveMember] = useState('PASIUK');

  const members = [
    {
      id: 'PASIUK',
      name: 'PASIUK',
      role: 'Strzelec',
      description:
        'Główny strzelec naszego kartelu. Zadba o bezpieczeństwo i pilnuje ładu w trasie. Nie ma takiego celu, którego nie trafi.',
      image: 'https://placehold.co/600x400?text=PASIUK',
    },
    {
      id: 'PEPE',
      name: 'PEPE',
      role: 'Kierowca',
      description:
        'Doświadczony kierowca ciężarówek, zna najbezpieczniejsze trasy i granice. Specjalista od przejazdów.',
      image: ' https://placehold.co/600x400?text=PEPE',
    },
    {
      id: 'ANTOS',
      name: 'ANTOS',
      role: 'Technik',
      description:
        'Odpowiedzialny za utrzymanie pojazdów w doskonałym stanie technicznym. Wszystko działa jak na raty.',
      image: ' https://placehold.co/600x400?text=ANTOS',
    },
  ];

  const currentMember = members.find((m) => m.id === activeMember);

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-800 to-black text-center py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
          Meksykański Kartel
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Najlepszy zespół przewozowy z Meksyku do USA. Szybko, bezpiecznie i niepostrzeżenie.
        </p>
        <div className="mt-10">
          <a
            href="#members"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
          >
            Poznaj nasz zespół
          </a>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Nasz Zespół</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {members.map((member) => (
              <div
                key={member.id}
                onClick={() => setActiveMember(member.id)}
                className={`cursor-pointer p-6 rounded-lg shadow-lg border-2 transition-all duration-300 text-center ${
                  activeMember === member.id
                    ? 'border-red-500 bg-gray-800'
                    : 'border-gray-700 hover:border-red-400 bg-gray-800/50 hover:bg-gray-800'
                }`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Member Detail */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-40 h-40 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
              />
              <div>
                <h3 className="text-3xl font-bold">{currentMember.name}</h3>
                <p className="text-red-500 font-semibold text-xl">{currentMember.role}</p>
                <p className="text-gray-300 mt-4">{currentMember.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Nasze Usługi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-red-500 text-4xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-2">Przewozy Międzynarodowe</h3>
              <p className="text-gray-400">
                Meksyk → USA. Zapewniamy szybki i niezawodny transport paczek.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-red-500 text-4xl mb-4">🛣️</div>
              <h3 className="text-xl font-bold mb-2">Zabezpieczone Trasy</h3>
              <p className="text-gray-400">
                Wykorzystujemy najbezpieczniejsze drogi i przejścia graniczne.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
              <div className="text-red-500 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2">Pełna Dyskrecja</h3>
              <p className="text-gray-400">
                Zapewniamy anonimowość i bezpieczeństwo w każdej fazie transportu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Skontaktuj się z nami</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Masz paczkę do przewiezienia? Skontaktuj się z nami, a zadbamy o wszystko.
          </p>
          <form className="space-y-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Twoje imię"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Twój e-mail"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Wiadomość"
              rows="4"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 hover:bg-red-700 rounded-md text-lg font-semibold transition-all"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-500">
        <p>&copy; 2025 Meksykański Kartel. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default App;
