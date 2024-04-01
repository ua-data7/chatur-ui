"use client";

import * as React from "react";

import { Box, Container, Link, Typography } from "@mui/joy";
import PublicLayout from "@/components/common/PublicLayout";

export default function About() {
  return (
    <PublicLayout>
      <Container>
        <Typography level="h1" sx={{ mt: 2 }}>
          Chatür: A Completely Homegrown Private LLM to Advance AI Enabled
          Education At The University of Arizona
        </Typography>
        <Typography level="h4" sx={{ mt: 2 }}>
          Mithun Paul, PhD
        </Typography>
        <Typography level="h5">Research Scientist</Typography>
        <Typography>Data Science Institute,</Typography>
        <Typography>University of Arizona</Typography>
        <Typography sx={{ mb: 2 }}>
          <Link href="mailto:mithunpaul@arizona.edu">
            mithunpaul@arizona.edu
          </Link>
        </Typography>
        <Typography level="h5" sx={{ mt: 2 }}>
          March 22, 2024
        </Typography>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">1. Introduction</Typography>
          <p>
            Large Language Models (LLM) are a powerful capability that has
            captivated the attention of users in academia and beyond. Access to
            these LLM platforms is typically provided through chatbot-style
            interfaces provided by commercial organizations (such as OpenAI via
            ChatGPT). These organizations offer subscriptions in a freemium
            mode, where the basic version (ChatGPT 3.5) is available at no cost
            to everyone, but the advanced and higher quality features require
            paid subscriptions.
          </p>
          <p>
            Today, students and instructors across educational institutions
            worldwide are using these publicly available free versions of AI
            chatbots (e.g., ChatGPT) for various purposes. Specifically,
            students use AI chatbots to help them with coursework, to understand
            course concepts, as research tools, and in many cases, whether we
            like it or not, to complete course assignments. Instructors are
            using AI chatbots to produce instructional content, write
            recommendation letters and student communications, for grading
            support, as a platform for instructing, and as a subject of study.
          </p>
          <p>
            But, even in the free mode of these chatbots, there are a couple of
            problems with the current commercialized AI chatbot platforms
            related to teaching and learning that both students and instructors
            point out as concerning. First, privacy and lack of content
            ownership were the most dominant and very important concerns from
            both groups in a recent survey done on campus. It is well known that
            most of the popular LLM-based models dished out from big
            corporations like OpenAI store all your data on their premises and
            use them to further train their model.
          </p>
          <p>
            The next concern is the limited access to specialized knowledge.
            While general chatbots like ChatGPT can answer most of the questions
            about the world, most other commercially available chatbots have a
            narrow range of supported questions or only have a conversational
            ability focused on common FAQs. They lack the advanced language
            processing to handle the open-ended inquiries typical of college
            students. This limited accuracy and tendency for misunderstanding
            are some of the downsides that erode user trust and satisfaction
            over repeated interactions.
          </p>{" "}
          <p>
            Another such problem of the commercially available chatbots is their
            ability to reply with potentially misleading information. Currently,
            unsophisticated chatbots with minimal oversight of answers could
            enable propagated misinformation on more complex topics. Even worse,
            when these chatbots are not able to find the right answer, they
            conjure up or hallucinate answers which are usually extremely far
            from reality or the expected answer. While this might be brushed off
            as yet another social media/tweet-worthy funny moment, such wrong
            answers presented confidently by the chatbot to the unsuspecting
            student might result with them learning the wrong information, even
            subconsciously, that could lead to a debacle later in life. Another
            fundamental problem with these chatbots are ethical concerns: AI
            chatbots raise risks of cheating, plagiarism, and a failure to
            enforce academic integrity standards.
          </p>
          <p>
            Last, but probably the most important concern, is that chatbots are
            causing an imbalance of equity on campus. Some students can afford
            to pay for more advanced versions of AI chatbots (e.g., GPT 4 turbo)
            and others cannot.
          </p>{" "}
          <p>
            Further, from an instructor’s perspective, the concerns were a
            little different. While privacy was their first concern, too,
            another concern they had was the inability of the corporate owners
            of the commercially available chatbot to protect intellectual
            property ownership. For example, even if instructors or a university
            can afford to buy licenses from a commercially available chatbot
            provider to train on the contents of a course they are offering ,
            there is no accountability for intellectual property (e.g. textbooks
            used for the course) or guarantee that the data will not be publicly
            available to the world via the internet since the data leaves the
            premises of the university to be stored in the corporate data center
            during training.
          </p>{" "}
          <p>
            {" "}
            Another major concern was that there is no learning system
            integration: current commercially available AI applications are not
            easily integrated into D2L. Further, AI chatbots often provide
            students with information that is inaccurate or in conflict with the
            approach taken in the course. This interferes with student learning
            achievement. Limited grading ability was another concern raised by
            instructors. Chatbots currently lack the advanced reasoning ability
            to evaluate subjective assignments or provide meaningful feedback
            tied to learning outcomes. Further, the chatbots are minimizing
            personal connection: The automated interactions from chatbots
            undermine the forming of supportive instructor-student relationships
            and nuanced communications. Poor adaptability was another reason:
            Rigid chatbot capabilities cannot readily adapt coaching, guidance,
            and support to individual student needs and challenges. Any
            misunderstandings or errors from the chatbot on student inquiries or
            input data undermine its credibility as a knowledge source.
          </p>{" "}
          <p>
            {" "}
            While the advanced models (e.g., GPT Turbo 4) have better qualities
            and features (use of private data to customize answers by bots,
            especially through API calls in programs), they are offered at a
            monthly individual subscription cost. Even then, it comes with
            limits in capacity (number of words) with additional costs incurred
            for extra words asked beyond the initial limit. Hence, this paid
            subscription model has hindered understanding and exploration of the
            LLM landscape for students in universities and smaller research labs
            which, in many cases, cannot afford and sustain long-term payments.
          </p>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            2. University of Arizona’s own privately trained LLM chatbot
          </Typography>
          <Typography sx={{ mt: 2 }}>
            To address all these concerns, the Data Science Institute (DSI) and
            Institute for Computation and Data-driven Insights (ICDI) were
            tasked in January 2024 to create an LLM that can readily and
            sustainably adopt these novel capabilities. We are pleased to
            announce that we have created <b>Chatür</b>: a free chatbot
            available for use by the faculty and students of the University of
            Arizona. Its abilities are at par with any commercially available
            LLM. To the best of our knowledge, this is the first time such an
            endeavor has been made in the world.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">3. So what is Chatür?</Typography>
          <p>Chatür is an LLM-based chatbot that:</p>
          <ol>
            <li>
              Is completely free for use for anyone at the University of
              Arizona.
            </li>
            <li>
              Is on par, or in some cases beyond, the abilities of any publicly
              available state-of-the-art LLM like ChatGPT and friends,
              specifically in its ability to reply with human-like answers to
              questions on a given topic, without hallucinating.
            </li>
            <li>
              Is privacy-preserving. All the data that Chatür trains on never
              leaves the premises of the University of Arizona.
            </li>
            <li>
              Runs on state-of-the-art hardware. The working prototypes are
              currently hosted on CyVerse and NSF JetStream2 infrastructure and
              hence run on the advanced Graphical Processing Units (GPUs).
            </li>
            <li>
              Has a built-in authentication and authorization setup enabling it
              to be seamlessly integrated into any existing learning pipeline
              like D2L.
            </li>
          </ol>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            4. Why should I use Chatür when I can use ChatGPT and friends?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            If the aforementioned concerns voiced by students and instructors
            were not enough to worry you, think about this. It might be easier
            to chat with ChatGPT, but its real strength can be extracted only
            when one can use the LLM for one’s own custom tasks and research.
            However, these canned solutions from corporate entities are not only
            so closed and financially inaccessible without burning a big hole in
            one’s pocket, but they also go against the fundamental foundations
            on which academia has proudly stood strong for ages: academic
            freedom., i.e the ability to openly share information and
            collaborate without the fear of consequences, financially or
            intellectually. Not to mention, even if you pay a fortune to get a
            license to use ChatGPT and friends, the sheer amount of resources
            (e.g., time, GPUs, CPU cycles, cooling hardware, and even carbon
            emission generated in the process) is more of a detriment and
            vicious cycle dragging you more into a white elephant led financial
            abyss.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            5. So you mean Chatür doesn’t need all the huge resources one would
            otherwise need to train a GPT based model?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Short answer: Hell no! Chatür is based on a very innovative,
            extremely cutting-edge technology called Retrieval Augmented
            Generation (RAG), where we only “retrieve" the answers to queries,
            which then get passed on to the LLM, instead of having to train the
            LLM itself again. In short, we never retrain the base LLM again, we
            just gently guide it into the right paths every time. Also remember,
            unlike it being a vestigial or an accidental outcome of a commercial
            rigmarole, Chatür was created with keeping a sole goal in mind: its
            free utility for academia and, in turn, the community around us.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            6. OK, but can I talk to Chatür about anything under the sun?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            No. The purpose of creating Chatür was not to serve as an
            all-knowing universal chatbot which by definition is prone to
            hallucination. Instead, Chatür is like a very sharp student focused
            only on one given topic at a time. In this first version of Chatür,
            he is currently trained and equipped to answer questions only from
            these five diverse data collections mentioned below. These use cases
            were hand-picked to reflect some of the potential avenues that
            Chatür can be used for on-campus in the future. This is the very
            first step towards making the University of Arizona an AI-enabled
            educational institution, however with miles to go before we sleep.
            Specifically, now you can chat and ask questions to Chatür only
            about:
          </Typography>
          <ol>
            <li>
              The contents of a course offered at the University of Arizona.
              Specifically, in this case, RNR 355: Introduction to Wildland
              Fire. (And yes his instructor did test Chatür and said, “He is a
              pretty impressive student”.)
            </li>
            <li>
              Any of the publications uploaded in the{" "}
              <Link href="https://extension.arizona.edu">
                Agriculture Cooperative Extension department at the University
                of Arizona
              </Link>
              .
            </li>
            <li>
              How to use <Link href="https://cyverse.org">CyVerse</Link> which
              is a computation framework hosted at the University of Arizona
              that provides researchers with powerful platforms to handle huge
              datasets and complex analyses, enabling data-driven discovery.
            </li>
            <li>
              <Link href="https://techlaunch.arizona.edu">
                Tech Launch Arizona
              </Link>
              , a department that specializes in moving inventions stemming from
              the University of Arizona’s research and technological innovations
              into the marketplace where they can create lasting social and
              economic impact.
            </li>
            <li>
              <Link href="https://squidfunk.github.io/mkdocs-material">
                Material for MKDocs
              </Link>
              , a publicly available tool which is a fast and simple static site
              generator geared towards building project documentation.
            </li>
          </ol>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">7. What does Chatür mean?</Typography>
          <Typography sx={{ mt: 2 }}>
            Chatür is the Sanskrit word for Smart. We picked it because like any
            parent, we think our kid is smart. Jokes aside, it is also a pun on
            the primary capability of our Large Language Model: the ability to
            have a human-like chat about a particular topic.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">8. So is Chatür smart?</Typography>
          <Typography sx={{ mt: 2 }}>
            While Chatür can already answer questions on the topics he has been
            trained about, he is far from being perfect. He is like a newborn
            baby. Neither Chatür, himself, nor his parents completely know what
            he is capable of now. As typical of a toddler, he still makes lots
            of mistakes. As good parents, we acknowledge the mistakes and are
            aware of some ways of correcting him. However, we thought before
            starting to make him better, let’s take Chatür to meet the people of
            our world (University?) so that he can slowly learn about our world
            and the world can learn about him. As Chatür is a toddler, we think
            it better for him to fall and learn to stand up in the real world,
            instead of trying to run inside our cozy house on day one.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">9. Is Chatür human?</Typography>
          <Typography sx={{ mt: 2 }}>
            Chatür can make a good simulation of a human conversation. But
            Chatür is, at the end of the day, just a large language model, which
            is a smart computer trained to speak one right word after the other,
            in an effort to mimic human conversation. Having said that, one very
            unique capability of Chatür is that, our kid doesn’t hallucinate,
            unlike some of his other commercially available friends. If he
            doesn’t know something, he is open about it. He will explicitly say
            that he doesn’t know the answer to the question you asked, and will
            wait to learn more about the topic from you. Especially since Chatür
            is specifically trained on a particular topic at a time, if you ask
            questions outside this topic, he will immediately own up to his
            ignorance.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            10. Can Chatür learn from what I ask him in a given chat session?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            That is something Chatür is capable of, but we haven’t turned that
            feature on right now. Refer below.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            11. Is everything I talk to Chatür safe? Will he remember my data
            and send it secretly to a corporate server sitting somewhere across
            the world?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Chatür is the world’s first completely privacy-preserving chatbot.
            We ensure that the questions you ask Chatür never leave the premises
            of the University of Arizona. We are so confident that we even
            tested Chatür after disconnecting all the network cables that
            connect him to the internet to ensure no data leaves the premises.
            And yes, he still performed very well. Also, it is to preserve this
            privacy that we have currently turned off his ability to learn from
            live questions. On a case-by-case basis, we plan to turn it on, but
            only with user consent.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            12. If I am not a subject matter expert, how can I believe Chatür is
            giving me the right answer?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            You can append your questions with specific commands like "Show me
            the reference from which you are using to arrive at this answer."
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            13. Nice. I am really curious now. When, where, and how can I meet
            Chatür?
          </Typography>
          <p>
            Anyone who has a University of Arizona email account can chat with
            Chatür. Follow these specific steps:
          </p>
          <ul>
            <li>
              Go to <Link href="https://cyverse.org/">https://cyverse.org</Link>
              .
            </li>
            <li>
              Create an Account. Please remember to use your official University
              of Arizona email in the email field.
            </li>
            <li>Your new CyVerse account be approved in a day or less.</li>
            <li>
              {" "}
              Once you have a Cyverse account, go to{" "}
              <Link href="https://chatur-dev.cyverse.ai/">
                https://chatur-dev.cyverse.ai
              </Link>
              .
            </li>
            <li>Use the CyVerse login and password to login.</li>
            <li>Click on the Student view.</li>{" "}
            <li>
              Pick a topic from the five topics found on the left-hand side and
              fire away with your questions to chat. Note that his social skills
              are currently very limited by design, but he can decently answer
              questions about any of the aforementioned five topics.
            </li>
            <li>
              If you feel happy about Chatür, go hug the cactus. Just Kidding.
              But we would love for you to give us feedback about Chatür. We
              would specifically like to know where Chatür didn’t meet your
              expectations so that we can incorporate/fine-tune him on those
              topics when we roll out the next version. Please send your
              comments and critiques to{" "}
              <Link href="mailto:mithunpaul@arizona.edu">
                mithunpaul@arizona.edu
              </Link>
              .
            </li>
          </ul>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            14. So, where do you plan to use Chatür? What are his future plans?
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Our next goal is to incorporate all the feedback we received in
            training Chatür further. Once we can train him to a good acceptable
            level in a given use case (e.g. details about the contents of a
            particular course), we plan to integrate him into D2L. With our
            built-in authorization and authentication abilities, we are
            confident that this will be an easy integration. Our dream is to
            eventually dish out one Chatür for each course on campus. The
            instructors will first have the ability to upload the documents they
            want to train him on (that is what the "instructor view" is). Once
            Chatür is trained, students who are registered in that particular
            course can start asking questions to have a conversation with Chatür
            about various things they learn from that course throughout the
            semester. In short, Chatür is the first baby (step?) in our effort
            toward an AI-enabled education system for the University of Arizona.
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography level="h3">
            15. So is Chatür going to replace teaching assistants
            eventually/will we all lose our jobs to AI?
          </Typography>
          <p>
            The first step to solving any problem is to accept reality and not
            be emotionally entangled with it. Currently, it has become
            inevitable that students are using (and will continue to use)
            LLM-based chatbots to assist them in learning and even abetting them
            in doing their homework assignments. We might as well accept this
            reality with maturity and instead try to reduce the negative impact
            that might come to students and faculty by using the purported best
            invention since cold beer, ChatGPT. For example, instead of letting
            students rely on and learn wrong facts from a constantly
            hallucinating universal chatbot like ChatGPT we can help them learn
            from our own custom-developed, well sand-boxed, private chatbot,
            like Chatür, specifically trained on only the respective course
            materials.
          </p>{" "}
          <p>
            {" "}
            In fact, one of our goals in creating Chatür is to encourage faculty
            to consider this as an opportunity to adapt to the ‘novus mundus’,
            instead of considering it as a misfortune or sad reality. For
            example, with Chatür in place, the instructor, when giving out
            homework can now suggest: here are the answers that Chatür will tell
            you for this question, but your goal is to beat Chatür or do better
            than Chatür.
          </p>{" "}
          <p>
            {" "}
            Also, such creative ways to incorporate AI into human learning will
            be the perfect acknowledgment and hat-tip to human survival
            instincts and stubborn resilience we have exhibited across
            centuries. For example, if you look back, you can see that human
            history is profusely sprinkled with iconoclastic technologies
            constantly threatening to “eliminate" human utility every few
            decades (starting from the invention of the wheel through
            agriculture to most recently, computers and smartphones). However,
            in all such cases, humans instead of getting bogged down and
            yielding to the threat have constantly adapted to these technologies
            and come up with creative ways to use them to their benefit. In fact
            this shift in thinking to constantly evolve and adapt rather than
            succumbing to the thought of AI being an apocalyptic event will also
            be the epitome and exemplary embodiment of the recent paradigm shift
            in philosophy to consider AI as an Augmentation to Human
            Intelligence and not an Artificial Intelligence that can or will
            ever replace human intelligence.
          </p>{" "}
          <p>
            {" "}
            In summary, what we are trying to achieve through Chatür and his
            future progeny, is to build the Ship of Theseus for AI technologies
            focusing on its use for our community. To quote what an AI
            researcher recently said, “AI is not a done deal. We are building
            the road as we walk it, and we can collectively decide what
            direction we want to go in, together.” We think those are really
            wise words, and we hope that we can build an AI that really is good
            for humans, and not necessarily for machines themselves.
          </p>
        </Box>

        <Typography level="h3" sx={{ mt: 4 }}>
          Contact and Feedback
        </Typography>
        <Typography sx={{ mt: 2 }}>
          If you feel happy about Chatür, we would love for you to give us
          feedback. Please send your comments and critiques to{" "}
          <Link href="mailto:mithunpaul@arizona.edu">
            mithunpaul@arizona.edu
          </Link>
          .
        </Typography>
      </Container>
    </PublicLayout>
  );
}
