export default function Characteristics() {
  return (
    <section
      id="characteristics"
      className="flex flex-col lg:flex-row justify-between gap-10 p-10 text-balance my-10  lg:my-20 px-10 lg:px-30"
    >
      <div className="flex flex-col gap-10 lg:gap-20  justify-between items-center lg:w-1/4">
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center ">
            Lunga durata della batteria
          </h2>
          <p className="text-center text-md lg:text-xl">
            Goditi ore di assistenza continua nella risoluzione dei bug grazie
            alla lunga durata della "batteria" (ovvero, la tua pazienza) della
            paperella di gomma.
          </p>
        </div>
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center">
            Compatibilità universale
          </h2>
          <p className="text-center text-md lg:text-xl">
            Funziona con tutti i linguaggi di programmazione e sistemi
            operativi, la paperella di gomma è l'unico strumento di debugging
            che non necessita di aggiornamenti.
          </p>
        </div>
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center">
            Design elegante
          </h2>
          <p className="text-center text-md lg:text-xl">
            Mostra con orgoglio il design elegante e raffinato della tua
            paperella di gomma, disponibile in vari colori per abbinarsi al tuo
            stile di programmatore.
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center lg:w-1/4">
        <img src="/invisible.png" alt="" />
      </div>
      <div className="flex flex-col gap-10 lg:gap-20 justify-between items-center lg:w-1/4">
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center">
            Resistenza agli spruzzi
          </h2>
          <p className="text-center text-md lg:text-xl">
            Perfetta per resistere ai piccoli incidenti con caffè e bevande, la
            tua paperella di gomma non teme schizzi, mantenendoti sempre pronto
            per il debugging.
          </p>
        </div>
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center">
            Portabilità
          </h2>
          <p className="text-center text-md lg:text-xl">
            Leggera e facile da trasportare, la paperella di gomma può essere il
            tuo compagno di lavoro ovunque tu vada. Portala con te per un
            supporto costante.
          </p>
        </div>
        <div>
          <h2 className="lg:text-4xl text-xl font-bold text-center">
            Promemoria anti-stress
          </h2>
          <p className="text-center text-md lg:text-xl">
            Quando lo stress del codice diventa troppo, spremi la tua paperella
            di gomma per un rapido sollievo anti-stress, senza bidogno di
            software complicati.
          </p>
        </div>
      </div>
    </section>
  );
}
