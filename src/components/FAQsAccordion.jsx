"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full ">
      <AccordionItem value="item-1">
        <AccordionTrigger className={"lg:text-3xl text-lg"}>
          Come posso utilizzare la paperella di gomma per il debugging?
        </AccordionTrigger>
        <AccordionContent className={"lg:text-xl text-md"}>
          Il metodo della paperella di gomma è una tecnica di debugging semplice
          ma efficace. <br />
          Consiste nell'esporre il problema ad alta voce, spiegandolo a un
          oggetto inanimato come se fosse un collega. <br />
          Descrivendo dettagliatamente il codice e il flusso di esecuzione,
          spesso si identifica l'errore durante la spiegazione stessa. <br />
          Questo approccio funziona perché costringe il programmatore a
          riesaminare il problema in modo strutturato, evidenziando
          inconsistenze o passaggi logici errati che erano stati trascurati
          durante lo sviluppo silenzioso.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className={"lg:text-3xl text-lg"}>
          Quali sono i vantaggi di usare una paperella di gomma per i
          programmatori?
        </AccordionTrigger>
        <AccordionContent className={"lg:text-xl text-md"}>
          Il metodo della paperella di gomma offre ai programmatori un modo
          semplice ma potente per risolvere problemi di codice. <br /> Spiegare
          ad alta voce il funzionamento del programma a un oggetto inanimato
          costringe la mente a rielaborare il problema in modo strutturato,
          spesso portando a identificare errori che erano sfuggiti durante la
          scrittura silenziosa. <br /> Questo approccio sviluppa autonomia nel
          debugging, riducendo la dipendenza da colleghi, mentre il processo di
          verbalizzazione aiuta a chiarire la logica del codice.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className={"lg:text-3xl text-lg"}>
          Posso usare la paperella di gomma indipendentemente dal linguaggio di
          programmazione?
        </AccordionTrigger>
        <AccordionContent className={"lg:text-xl text-md"}>
          Assolutamente sì, la paperella di gomma è efficace con qualsiasi
          linguaggio di programmazione. <br /> Il suo potere non dipende dalla
          sintassi o dal paradigma di programmazione, ma dal meccanismo
          psicologico alla base: costringerti a verbalizzare e strutturare il
          tuo pensiero. <br /> Che tu stia lavorando con Python, JavaScript, C,
          SQL o anche con linguaggi low-level come Assembly, il principio resta
          invariato. <br /> Quando spieghi il problema alla paperella, il tuo
          cervello è obbligato a passare dalla modalità "scrittura del codice"
          alla modalità "analisi critica".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className={"lg:text-3xl text-lg"}>
          Quanto dettagliatamente devo spiegare il mio codice alla paperella di
          gomma?
        </AccordionTrigger>
        <AccordionContent className={"lg:text-xl text-md"}>
          Devi spiegare il codice alla paperella di gomma con lo stesso livello
          di dettaglio che useresti con un collega che non conosce il tuo
          progetto. <br /> Descrivi ogni passaggio logico, le variabili
          coinvolte, i flussi di controllo e lo scopo di ogni blocco di codice.{" "}
          <br /> Non dare nulla per scontato, anche le operazioni che ti
          sembrano ovvie. <br />
          L'obiettivo è costringerti a verbalizzare ogni aspetto del tuo
          ragionamento, perché è proprio nei dettagli apparentemente banali che
          spesso si nascondono gli errori. <br /> Più sei metodico e minuzioso,
          più è probabile che il problema emerga durante la spiegazione.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
