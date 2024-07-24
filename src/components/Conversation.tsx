import { ScrollArea } from '@/components/ui/scroll-area';

export default function Conversation() {
  return (
    <>
      <p className="font-bold text-3xl">Conversation</p>
      <ScrollArea className="h-[75%] rounded-md border p-4">
        <div className="chat chat-start">
          <div className="chat-header">HR</div>
          <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">HR</div>
          <div className="chat-bubble chat-bubble-primary">
            Put me on the Council and not make me a Master!??
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Candidate</div>
          <div className="chat-bubble chat-bubble-success">Calm down, Anakin.</div>
        </div>
        <div className="chat chat-start">
          <div className="chat-header">HR</div>
          <div className="chat-bubble chat-bubble-primary">
            That's never been done in the history of the Jedi. It's insulting!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Candidate</div>
          <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Candidate</div>
          <div className="chat-bubble chat-bubble-success">To be on the Council at your age.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-header">Candidate</div>
          <div className="chat-bubble chat-bubble-success">It's never happened before.</div>
        </div>
      </ScrollArea>
    </>
  );
}
