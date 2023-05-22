import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  const pokemonId = useSignal(1); //Primitivos boolean,string, etc

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      {/* TODO: Crear imagen */}
      <div class="margin-top-2">
        <button class="btn btn-primary mr-2">Anterior</button>
        <button class="btn btn-primary">Anterior</button>
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
