import AnimatedText from './AnimatedText'
import PhotoFrame from './PhotoFrame'
import './MessageSection.css'

const MessageSection = () => {
  return (
    <section className="message-section">
      <div className="message-container">

        <AnimatedText delay={0.1}>
          <p>
            You were such a good friend — and I still remember those days when we used to roam around the whole college, making fun of each other and going to see Gayathri chechi.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/046acdbd-05e4-41ee-85c4-7ffdb73b1fdb.jpg"
          alt="Sreya and friend outdoors"
          position="center"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            I miss those moments a lot… not Gayathri chechi, but us — the way we used to spend time together as real friends.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/4260cf37-1c1e-46d4-864a-c5dd32bf4571.jpg"
          alt="Sreya and friend at college"
          position="right"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            Those late-night calls that lasted till morning — I still remember how, at first, they were a bit annoying, but now I can't imagine days without them. Time always flew by so fast whenever we were talking. One moment it was night, and the next, sunrise.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/52d06674-2106-4034-aeab-0f44a056be48.jpg"
          alt="Sreya at graduation"
          position="left"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            The way we stared at each other — I fell a lot in those moments. Holding your hands felt like time just stopped for a while, and everything around faded away.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/5d1d7729-0390-46fb-8220-9b73e77f5765.jpg"
          alt="Sreya and friend close moment"
          position="center"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            I know we've had our share of issues, misunderstandings, even betrayal… and I know I used to argue over those things. But above all, I want you to know that I still cherish the friendship we once had — the laughter, the silly fights, throwing shoes at each other, you scratching my arm till the skin peeled (painful but funny now 😅), talking until morning, and making fun of each other endlessly.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/834dffce-a38a-4fb9-87ab-77f713af9c41.jpg"
          alt="Sreya with sunflower"
          position="right"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            I'll always treasure the trust and bond we shared. Maybe we might stop talking someday, maybe things won't be the same again — but I'll always remember those days with a smile.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/89651681-7d4e-4351-bd07-aae75502f358.jpg"
          alt="Beautiful flowers"
          position="left"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            I still wish that all your dreams come true, Sreya 🌻
          </p>
          <p className="highlight-text">
            You're more beautiful than any sunflower or the moon you adore — whichever shines brighter, you still outshine them both.
          </p>
          <p className="small-text">(Yeah, kinda cringe, but you deserve that line 😅💛)</p>
        </AnimatedText>

        <PhotoFrame
          src="/images/98d9508e-5f57-4482-aa18-39bc31e80931.jpg"
          alt="Sreya and friend happy moment"
          position="center"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p>
            No matter what, you'll always be a good friend to me.
            Maybe I won't show it, but deep down in my heart — you'll always hold that place.
          </p>
        </AnimatedText>

        <PhotoFrame
          src="/images/a8f209db-d9d2-46ef-b80a-a57565027bbd.jpg"
          alt="Sreya and friend together"
          position="center"
          delay={0.2}
        />

        <AnimatedText delay={0.1}>
          <p className="final-message">
            Happy Birthday once again, Sreya. 🎉💖
          </p>
        </AnimatedText>

        <div className="footer-space"></div>
      </div>
    </section>
  )
}

export default MessageSection
