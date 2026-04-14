import React from 'https://esm.sh/react@18.3.1';
import { createRoot } from 'https://esm.sh/react-dom@18.3.1/client';
import { motion } from 'https://esm.sh/framer-motion@11.11.17?external=react,react-dom';

const h = React.createElement;

function Section({ title, children }) {
  return h(
    'section',
    { className: 'py-20 px-6 max-w-5xl mx-auto text-center text-stone-100' },
    h(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: 'text-3xl font-semibold mb-6',
      },
      title,
    ),
    h('p', { className: 'text-lg leading-relaxed' }, children),
  );
}

function Card({ title, children }) {
  return h(
    motion.div,
    {
      whileHover: { scale: 1.05 },
      className: 'p-6 bg-stone-800 rounded-2xl shadow-lg',
    },
    h('h3', { className: 'text-xl font-semibold mb-4' }, title),
    h('p', null, children),
  );
}

function ImageBlock({ src }) {
  return h(
    'div',
    { className: 'w-full h-[400px] overflow-hidden' },
    h('img', {
      src,
      alt: 'La Graella d’Urús',
      className: 'w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-700',
    }),
  );
}

function LaGraellaUrus() {
  return h(
    'div',
    { className: 'min-h-screen bg-stone-950 text-stone-100 font-sans' },
    h(
      'section',
      {
        className:
          "h-screen flex flex-col justify-center items-center text-center px-6 bg-[url('https://images.unsplash.com/photo-1555992336-03a23c2a2f2c')] bg-cover bg-center",
      },
      h(
        'div',
        { className: 'bg-black/70 p-10 rounded-2xl backdrop-blur-md' },
        h('h1', { className: 'text-5xl font-bold mb-4 tracking-wide' }, 'La Graella d’Urús'),
        h('p', { className: 'text-xl uppercase tracking-widest' }, 'Graella de muntanya'),
        h(
          'p',
          { className: 'mt-6 text-lg max-w-xl' },
          'Una nova forma d’entendre la restauració familiar a la Cerdanya.',
        ),
      ),
    ),
    h(ImageBlock, {
      src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e',
    }),
    h(
      Section,
      { title: 'El problema' },
      'Les famílies sovint no gaudeixen realment dels restaurants: nens avorrits, experiències estressants i una qualitat que no sempre correspon al preu.',
    ),
    h(ImageBlock, {
      src: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1',
    }),
    h(
      Section,
      { title: 'La solució' },
      'Creem un espai on adults i nens gaudeixen al mateix temps. Gastronomia de qualitat combinada amb una experiència familiar real.',
    ),
    h(
      Section,
      { title: 'El concepte' },
      'Cuina a la brasa amb producte local km0, una experiència sensorial amb foc viu i plats interactius com la carn en pedra calenta.',
    ),
    h(ImageBlock, {
      src: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba',
    }),
    h(
      'section',
      { className: 'py-20 px-6 bg-stone-900' },
      h(
        'div',
        { className: 'max-w-6xl mx-auto' },
        h('h2', { className: 'text-3xl font-semibold mb-10' }, 'Línies de negoci'),
        h(
          'div',
          { className: 'grid md:grid-cols-3 gap-6' },
          h(
            Card,
            { title: 'Restaurant' },
            'Experiència gastronòmica completa en un entorn de muntanya.',
          ),
          h(Card, { title: 'Graella a casa' }, 'Kits gourmet que porten l’experiència a domicili.'),
          h(Card, { title: 'Càtering' }, 'Esdeveniments privats amb alt valor afegit.'),
        ),
      ),
    ),
    h(
      Section,
      { title: 'Avantatge competitiu' },
      'Experiència infantil integrada, transparència total dels productes, extensió de l’experiència a casa i una proposta gastronòmica interactiva.',
    ),
    h(ImageBlock, {
      src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d',
    }),
    h(
      Section,
      { title: 'Ubicació estratègica' },
      'Urús, al cor de la Cerdanya. Zona amb turisme constant durant tot l’any gràcies a l’esquí, natura i turisme rural.',
    ),
    h(
      Section,
      { title: 'Client objectiu' },
      'Famílies, turistes i grups amb poder adquisitiu mitjà-alt que busquen una experiència autèntica i de qualitat.',
    ),
    h(
      'section',
      {
        className: 'py-24 px-6 bg-gradient-to-b from-stone-900 to-black text-center text-stone-100',
      },
      h(
        'div',
        { className: 'max-w-3xl mx-auto' },
        h('h2', { className: 'text-3xl font-semibold mb-6' }, 'La graella que ens uneix'),
        h(
          'p',
          { className: 'text-lg leading-relaxed' },
          'Inspirat en moments reals al voltant del foc, aquest projecte neix per recuperar el valor de compartir, riure i gaudir en família.',
        ),
      ),
    ),
    h(
      Section,
      { title: 'Sostenibilitat' },
      'Energia renovable, productes de proximitat, reducció de residus i un compromís real amb el territori.',
    ),
    h(
      Section,
      { title: 'Viabilitat' },
      'Inversió inicial de 290.200€, amb un model diversificat i sostenible que garanteix estabilitat i creixement.',
    ),
    h('footer', { className: 'py-10 text-center text-sm bg-black' }, '© 2026 La Graella d’Urús'),
  );
}

createRoot(document.getElementById('root')).render(h(LaGraellaUrus));
