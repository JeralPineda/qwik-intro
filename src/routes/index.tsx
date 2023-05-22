import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const pokemonId = useSignal(1); //Primitivos boolean,string, etc

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      {/* TODO: Crear imagen */}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId.value}.png`}
        alt="Pokemon"
        width={200}
        height={200}
      />

      <div class="margin-top-2">
        <button onClick$={() => pokemonId.value--} class="btn btn-primary mr-2">
          Anterior
        </button>
        <button onClick$={() => pokemonId.value++} class="btn btn-primary">
          Siguiente
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'PokeQwik',
  meta: [
    {
      name: 'description',
      content: 'Esta es mi primer app en qwik',
    },
  ],
};
