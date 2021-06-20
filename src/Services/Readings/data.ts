export interface LabrynthosCardData {
  index: number;
  name: string;
  description: string;
  keywordsGeneralUpright: string[];
  keywordsGeneralReversed: string[];
  keywordsLoveUpright: string[];
  keywordsLoveReversed: string[];
  keywordsCareerUpright: string[];
  keywordsCareerReversed: string[];
  meaningUpright: string;
  meaningReversed: string;
  meaningLoveUpright: string;
  meaningLoveReversed: string;
  meaningCareerUpright: string;
  meaningCareerReversed: string;
};

// Scraped from Labrynthos. Placeholder while we write our own copy.
// https://github.com/jorgenbuilder/labrynthos-scape

const LabrynthosData: LabrynthosCardData[] = [
  {
    name: 'The World',
    description: 'The World card in the tarot deck has a dancing figure at the center. The dancing figure on the card has one leg crossed over the other and holds a wand in either hand. She symbolizes balance and evolution in movement. The fulfillment and unity that she represents is not one that is static, but ever-changing, dynamic and eternal.The green wreath of flowers that surrounds the central figure is a symbol of success, while the red ribbons that wrap around it are reminiscent of infinity. There are four figures on each corner of the card - and they are the same ones that are in the Wheel of Fortune. The four figures represent Scorpio, Leo, Aquarius and Taurus - representative of the four corners of the universe, the four elements, and the four evangelicals. Together, they symbolize the harmony between all of their energies.',
    keywordsGeneralUpright: [
      'completion',
      'achievement',
      'fulfilment',
      'sense of belonging',
      'wholeness',
      'harmony'
    ],
    keywordsGeneralReversed: [
      'lack of closure',
      'lack of achievement',
      'feeling incomplete',
      'emptiness'
    ],
    keywordsLoveUpright: [ 'feeling loved and grateful', 'fulfilling romantic life' ],
    keywordsLoveReversed: [ 'missing something in love life', 'taking partner for granted' ],
    keywordsCareerUpright: [ 'completing career goal', 'fulfilling career path' ],
    keywordsCareerReversed: [ 'false measure of success', 'missing piece in career' ],
    meaningUpright: 'To encounter the World in your cards is to encounter a great unity and wholeness. It symbolizes the moment when the inner and the outer worlds - self and other - become a single entity. In some traditions, this state is described as enlightenment, or nirvana. There is a recognition that the individual self is profoundly linked with all other things, and that we all dance and sway along the flow of life to one rhythm. Not only do you hear this rhythm, but you participate in it - following the dips and the rises, the joys and the sorrows. \n' +
      '\n' +
      'The meaning of the World card is fulfillment, achievement, and completion. This shows that all the efforts that you have been putting in place are starting to pay off. It reflects that you have completed a major milestone in your life and you have built the resilience to withstand challenges. The World may indicate completion of a long-term project, study or any other major event in your life. It may also mean the birth of a child, marriage, graduation or any other thing that you have accomplished.The World card shows that you have a desire to give back to the community in various ways. You have a commitment to make the world a better place because you understand that everything is connected. ',
    meaningReversed: "You are drawing near to something that marks the end of a journey or an era. You may have many accomplishments that have lined your path, but there is a strange emptiness that fills you when you look backwards upon it, as if you have all the pieces but they are not coming together. What is missing? Do you feel connected to what you're doing? Do you feel connected to others? What alienates you from feeling complete? From feeling whole?",
    meaningLoveUpright: 'Your relationship gives you a sense of deep fulfillment and gratitude right now. The World tarot love meaning signals a feeling of completion and happiness. At times, this card can even suggest moving to the next step of your relationship, such as marriage or starting a family. As you complete one cycle in your life, you are also looking towards the future into next steps. You and your partner may be making plans, perhaps even big decisions.Even when single, there is a sense of fulfillment and happiness here. Before getting into a relationship, one must feel like a whole person. While a relationship may be nice, you are confident on your own. You have this sense of wholeness and self understanding right now, giving you great opportunities to meet new and exciting people, as well as charm and magnetism.',
    meaningLoveReversed: 'While other aspects of your life may be going well, it seems like when it comes to love, something is missing. The reversed World tarot love meaning signals a feeling of incompletion; a nearing to the end of one cycle, but not quite there. You are so close to feeling fulfilled and happy, but something prevents you from seeing it. Are you not seeing your partner for all the wonderful things they are? Or is a past relationship coloring your experience of this one? Do you not have a feeling of closure from a past partner? Something requires you to tie up loose ends right now, so that you can be happy in the moment.',
    meaningCareerUpright: 'Be proud of yourself, as you have done what you have set out to do when it comes to your career. Whether that means finding a job that makes you feel fulfilled both spiritually and materially, finishing a particularly challenging project, or opening your own business, there’s much to celebrate right now. Take the time now to enjoy what you have earned. It’s likely you’re already thinking about what comes next, as this is the normal cycle of things. For now, enjoy the moment. ',
    meaningCareerReversed: 'Have you finally accomplished a big career goal that you wanted for a long time, only to find that the rewards aren’t quite as sweet as you thought they were? Or have you fallen just shy of what you wanted to accomplish? The reversed World signals nearing completion, but perhaps missing the final pieces that would make you truly feel fulfilled. Perhaps your goals have been too defined by what others perceive as success, or perhaps you have set your bar too low that reaching this goal felt unchallenging. Now is the time to reevaluate your goals and make the adjustments as necessary.  ',
    index: 21
  },
  {
    name: 'Judgement',
    description: 'This card depicts what one would imagine the last judgment would be, in the various forms that takes in many mythologies. The image in the Judgement card shows women, men, and children who are rising from the grave to respond to Gabriel’s trumpet call. Their outstretched arms symbolize that they are ready to be judged by the universe. They are about to meet their creator, their actions weighed, and find out where they will spend the remainder of eternity: in heaven or in hell. The massive tidal wave in the background signify that judgement is unavoidable, and that this judgement will be final.\n' +
      '\n' +
      'Judgement is ruled by Pluto, who is the underworld’s ruler. There are echoes of this card in Death, for they both remind us that everything comes to an end and that a new beginning is coming.',
    keywordsGeneralUpright: [
      'self-evaluation',
      'awakening',
      'renewal',
      'purpose',
      'reflection',
      'reckoning'
    ],
    keywordsGeneralReversed: [
      'self-doubt',
      'lack of self-awareness',
      'failure to learn lessons',
      'self-loathing'
    ],
    keywordsLoveUpright: [ 'renewal of love', 'making adjustments in relationship' ],
    keywordsLoveReversed: [ 'blaming your partner', 'denial about love life' ],
    keywordsCareerUpright: [ 'finding career purpose', 'accountability at work' ],
    keywordsCareerReversed: [
      'self-doubt at work',
      'failure to take responsibility for mistakes'
    ],
    meaningUpright: 'The traditional Judgement meaning focuses on the moment when we reflect and evaluate ourselves and our actions. It is through self-reflection that we can have a clearer and objective understanding about where we are now, and what we need to do in order to grow as humans. The Judgement card appearing in a reading signifies that you are coming close to this significant point in your life where you must start to evaluate yourself. \n' +
      '\n' +
      'To see this card can also indicate that you are in a period of awakening, brought on by the act of self-reflection. You now have a clearer idea of what you need to change and how you need to be true yourself and your needs. This can mean making small changes to your daily life or making huge changes that not only affect you but the people close to you.\n' +
      '\n' +
      'The Judgement card reminds us that we all will be faced with choices that will have an astounding effect for your entire life. The card brings to mind moments where actions you have taken have changed the course of your path for good. There may have been a moment where there is no looking back. The consequences of those actions eventually will catch up to you, and this card seems to indicate that this is the time. You may have to let go of the past, so you can move forward with your plans to have a new life. ',
    meaningReversed: 'The reversed Judgement card can mean that you doubt and judge yourself too harshly. This could be causing you to miss opportunities that were awaiting you. The lost momentum causes you to fall behind in your plans, which can make it difficult to move forward. This means that you should not be cautious, but you should be moving forward with pride and confidence. Another reading of the Judgement reversal card can be a push to take time out of your busy routine to reflect upon your life to this point, and what you have learned so far. You are most likely not giving yourself the time or space to fully think about the matter and learn the lessons you need to to be able to progress with awareness. You could also be too critical of your past actions, so you are not giving yourself the forgiveness to move forward. The mistakes that we have made in the past are learning tools, so they help us move though life. Focusing too hard on these mistakes can cause us to trip and fall.',
    meaningLoveUpright: 'Now is the time to take a closer look at your love life and figure out what needs to be changed. The Judgement tarot love meaning indicates a time of self-reflection and analysis initiated by an awakening. Issues in your love life that you once ignored may be seen clearly now, and you have the chance to make adjustments. Keep communication with your partner open, and make sure both of you are aware of each other’s needs. Small changes that the two of you make together can have a great effect on your relationship. Your past actions and their consequences, whether good or bad, are catching up with you now. If you’ve made mistakes in the past, use the lessons you’ve learned to make changes for your future.',
    meaningLoveReversed: 'Ensure that your criticisms about your partner right now are fair before you make them. There is likely something that you are unhappy about, but the reversed Judgement tarot love meaning can signal that some compromise and moderation is needed. On the other hand, this card can also signal that you need to open your eyes to your romantic situation and see it more clearly. Have you been in denial about something? Are you happy in your relationship? Is there something missing? Are there attitudes you have to love that you have been blind to but are deeply affecting your approach to dating? This card is asking you to see yourself and your relationships with honesty. Facing the truth can also free you.',
    meaningCareerUpright: 'You may be going through a period of awakening when it comes to your career path. Perhaps you have found a new purpose or a calling that cannot be ignored. This can sometimes come with adjustments needing to be made at your workplace or your position. While this can be stressful, these changes can bring you a sense of feeling revitalized when it comes to your work. If your workplace has been tense, the Judgement card also signals that you may need to be more aware about how your actions at your workplace are affecting others. Take some time to evaluate how your behavior has been, and what can be improved. Take responsibility for your actions and your part in any conflicts that have been brewing. ',
    meaningCareerReversed: 'Perhaps you have been too harsh on yourself lately. If you’ve made mistakes at work, you may find that it is hard to let those feelings of disappointment with yourself go, instead of making amends and moving on. You may be left with a lingering sense of doubt about your own abilities. Alternatively, this card can signal that you are unable to take responsibility for your own actions, and not learning the lessons you need to in order to take the next steps in your career. Your lack of awareness when it comes to handling yourself may be grating on colleagues. Have you been doing all that you can when it comes to your work projects? Have you communicated well? Or do you always shift the blame to others? ',
    index: 20
  },
  {
    name: 'The Sun',
    description: 'The Sun card presents an feeling of optimism and fulfillment. This card represents the dawn which follows the darkest of nights. The Sun is the source of all the life on our planet, and it represents life energy itself. There is a child depicted in the card, playing joyfully in the foreground. A symbol of our innocence, it represents the happiness that occurs when you are in alignment with your true self. The child is naked, meaning that he has absolutely nothing to hide. The card also depicts the childhood innocence and absolute purity. This is particularly emphasized through the white horse upon which the child is riding. The horse here is also a symbol of strength and nobility.',
    keywordsGeneralUpright: [
      'happiness',
      'success',
      'optimism',
      'vitality',
      'joy',
      'confidence',
      'happiness',
      'truth'
    ],
    keywordsGeneralReversed: [
      'blocked happiness',
      'excessive enthusiasm',
      'pessimism',
      'unrealistic expectations',
      'conceitedness'
    ],
    keywordsLoveUpright: [
      'happiness and love in relationship',
      'positivity is attractive',
      'feeling radiant'
    ],
    keywordsLoveReversed: [
      'boredom',
      'taking love for granted',
      'being unable to see happiness in relationship'
    ],
    keywordsCareerUpright: [
      'enthusiastic and energetic at work',
      'successful work projects'
    ],
    keywordsCareerReversed: [
      'failure to appreciate work',
      'over-confidence at work situations',
      'unrealistic beliefs'
    ],
    meaningUpright: 'The Sun card represents success, abundance, and radiance. Like the sun itself, it gives strength and vitality to all those that are lucky enough to feel its rays. There is much joy and happiness that is coming to you.Because of your own personal fulfillment, you provide others with inspiration and joy as well. People are drawn to you because they are capable of seeing the warm and beautiful energy which you bring into their lives. You are also in a position in which you are capable of sharing your qualities as well as achievements with other people. You radiate love and affection towards those you care about the most. \n' +
      '\n' +
      'The card shows that you have a significant sense of deserved confidence right now. Life is currently particularly good, and the sun is shining your way as you reach the goals that you set. The Sun is one of the cards in the tarot which provide nothing but good feelings and fulfillment.',
    meaningReversed: 'In the reversed position, the Sun indicates that you might have significant difficulties finding positive aspects to certain situations. The clouds might be blocking out the warmth and light that you need to progress. This might be preventing you from feeling confident and powerful. You may experience certain setbacks which are damaging your optimism and enthusiasm. On the other hand, the Sun reversed might be indicative that you are being unrealistic. It might be a sign that you have an overly optimistic perception of certain situations. These are things that you need to take into account in order to ensure that you are on the right track and your successes continue as they do.',
    meaningLoveUpright: 'With the Sun comes light, life and warmth. The Sun tarot love meaning heralds much of the same in your relationship and your romantic life in general. There is happiness, celebration, and fulfillment in this card. Your relationship can be blossoming under this light, bringing the two of you closer together as you enjoy life’s blessings. There is likely harmony now, and you can use this time to create an even closer connection with your loved one. Should you be single, now is also the time to step out and let yourself shine. Your positivity and radiance can be magnetic now, and draw you the kind of romance that you’ve dreamed of.',
    meaningLoveReversed: 'The Sun still shines, though it may be temporarily blocked out by the clouds right now. If you’re in a relationship, you may be feeling bored, even though everything is going swimmingly. Are you taking your relationship for granted? Have you and your partner drifted apart due to daily routines and mundane tasks? It’s likely that the two of you need a little more quality time together to rekindle your romance. The Sun is always a positive card, whether upright or reversed; but reversed it usually means that something prevents you from seeing the wonderful things that you already have. What about your partner did you fall in love with? What can you be thankful for in your relationship?',
    meaningCareerUpright: 'When it comes to your career, the Sun brings success, optimism and joy wherever it shines. You may be experiencing a period of great enthusiasm, motivation and happiness when it comes to your job right now. Your career may feel both spiritually and materially fulfilling. This happiness and positivity can be radiant now; your happiness may create a wonderful environment for your colleagues and those you surround yourself with. If you’re going through the process of searching for a new job or a promotion, your continued positivity will bring you success in your career goals.  ',
    meaningCareerReversed: 'Even when the Sun is reversed, it suggests pleasant things; but perhaps clouded by one’s inability to appreciate and see what is truly there. If you’ve been glum, depressed or pessimistic about what you have at work, the Sun suggests that you need only to peel back the clouds and see what happiness you already have. Feeling drained and exhausted? Your work environment may be very supportive of you getting the rest you need. Perhaps you feel you aren’t being paid enough? Bringing superiors to attention in this matter can get you the raise you deserve. Don’t let your negativity close doors to you taking decisive action and improving the situation. Sometimes, this card can also suggest over-confidence, or unrealistic expectations when it comes to your ambitions. Make sure that you are practical about what you can achieve at this time. ',
    index: 19
  },
  {
    name: 'The Moon',
    description: 'When we encounter the Moon, we see a path that leads off into the distance. On either side of the path stand a wolf and a dog, representing our animalistic nature - one is civilized, and the other wild and feral. There is a crawfish that is crawling out of the pond from which the path stems from. In the distance, we can see two towers flanking the central path, once again alluding to the doubles visible in this card. Everything in this card seems to echo the other, as if to allude to two possibilities. When we walk down the path, we walk the fine line between conscious and unconscious, between the tamed side of civilization of the dog, and the forces of nature represented by the wolf. \n' +
      '\n' +
      'The towers on the opposing ends represent the forces of good and evil, and their similarity in appearance can allude to the difficulties that we face in distinguishing between them.',
    keywordsGeneralUpright: [
      'illusion',
      'intuition',
      'uncertainty',
      'confusion',
      'complexity',
      'secrets',
      'unconscious'
    ],
    keywordsGeneralReversed: [
      'fear',
      'deception',
      'anxiety',
      'misunderstanding',
      'misinterpretation',
      'clarity',
      'understanding'
    ],
    keywordsLoveUpright: [ 'complicated romance', 'uncertainty about love or relationship' ],
    keywordsLoveReversed: [ 'deception', 'fear and paranoia regarding love' ],
    keywordsCareerUpright: [
      'uncertainty around career path',
      'confusion at job',
      'lack of information'
    ],
    keywordsCareerReversed: [
      'clarity at work',
      'sabotage',
      'deception and trickery at workplace'
    ],
    meaningUpright: "On one hand, the Moon card can symbolize your imagination is taking the best of you. In the dark of the night, you are taking a path that you are unsure of, for there could be danger lurking in its depths. You are the crawfish embarking on the path in the card. The moon's light can bring you clarity and understanding and you should allow your intuition to guide you through this darkness. \n" +
      '\n' +
      'You need to be aware of the situations that are causing fear and anxiety in your mind, whether it is now or in the future. It alerts you not to allow inner disturbances and self-deception to take the best of you. These deep memories and fears must be let go, and the negative energies must be released and turned into something constructive. Another reading of the Moon card is the existence of illusion. Some hidden truth must be discovered, for what you are seeing now may just be a trick of the light. You must search for the hidden forces that must be unraveled.',
    meaningReversed: 'A Moon reversal in a reading can sometimes indicate that the darker and more negative aspects of the moon are present in your life. It could represent confusion and unhappiness - you want to make progress, but you are not sure what is the right thing to do. You must deal with your anxiety and fears by overcoming them, for they are like shadows in the dark. It is time to believe in yourself and move forward. The moon reversal meaning indicates that you are in an intuitive period or you have recently battled confusion, anxiety, and self-deception. It could be that you are misinterpreting how you have been feeling however you are starting to improve on this. Another reversed moon meaning is that the forces of the night that are bringing you confusion are starting to dissipate. You have started managing your fears and anxiety. Whatever negative energies you have been facing are slowly fading away. It presents a liberating experience as you discover the positive side of things.',
    meaningLoveUpright: 'With the Moon in a love tarot reading, it’s likely that emotions are complicated at this time. The environment can be one full of misunderstandings, and not everything is as it appears. You may need to do some work to get to the bottom of things; be sure to not only ensure the intentions of others, but also understand your own emotions, desires and motivations. There may be old attitudes, beliefs or ideas that are clouding your judgement. Many things can be hiding in your unconscious affecting your ability to accept love. Are past relationships haunting you? Have you lost faith in love? Do you believe you are unworthy of love? All of these can have profound affects on how we approach relationships. Now is the time to examine them and reveal them as they truly are.',
    meaningLoveReversed: 'The reversed Moon tarot love meaning can suggest that confusion and deception may be in the air. You may not have all the information you need at this moment, and you’ll have to rely on intuition in order to guide your way to the truth. Are you being honest with your partner? Are they being honest with you? Sometimes deception doesn’t necessarily have to have malicious motivations, but can even be done out of kindness or the desire to spare another person’s feelings. Hiding the truth however, is never a sustainable situation.',
    meaningCareerUpright: 'There may be some uncertainty when it comes to your career path right now. You may not have a clear understanding of what your goals are and which direction you should go towards. Alternatively, your workplace right now can be a tense atmosphere, one that comes from haziness and confusion about project goals, or what everyone should be doing. Misunderstandings can be rife right now, so make sure you express yourself clearly; it may be better to repeat yourself. By the same token, you may find that you don’t have all the information you need right now to make sound work decisions. Who can help shed some light on the facts? ',
    meaningCareerReversed: 'On one hand, the reversed Moon can signal the dissipation of the uncertainty and confusion that has characterized your job or workplace. Things may be more clear, and you may have a better understanding of which direction you should be working towards. Alternatively, the reversed Moon can also indicate a worsening of the situation, where misunderstandings and poor communication can even turn into deception, lying and sabotage. Your anxieties and fear about the workplace or your colleagues can make your worst fears come true, as everyone becomes more defensive, protective and paranoid.  ',
    index: 18
  },
  {
    name: 'The Star',
    description: "The Star card shows a woman kneeling at the edge of a small pond. She is holding two containers of water. One container pours the water out to the dry land, as if to to nourish it and ensure its fertility. The lush green land around her seems to say that it is working. One foot is inside the water which shows the spiritual abilities and inner strength of the woman. The other foot on the ground shows her practical abilities and strengths. Behind her, there is a large central star surrounded by seven small stars which represent the chakras. There is bird standing at a tree branch which represents the holy ibis of thought. The Star's astrological correspondent is Aquarius.",
    keywordsGeneralUpright: [
      'hope',
      'inspiration',
      'positivity',
      'faith',
      'renewal',
      'healing',
      'rejuvenation'
    ],
    keywordsGeneralReversed: [
      'hopelessness',
      'despair',
      'negativity',
      'lack of faith',
      'despondent'
    ],
    keywordsLoveUpright: [ 'optimistic about love life', 'healing from past wounds' ],
    keywordsLoveReversed: [
      'extreme self-criticism',
      'loss of hope about romance',
      'lack of confidence'
    ],
    keywordsCareerUpright: [ 'positivity brings career rewards', 'high hopes about job' ],
    keywordsCareerReversed: [
      'lack of motivation',
      'lack of enthusiasm',
      'pessimism about work'
    ],
    meaningUpright: 'The Star brings hope, renewed power, and strength to carry on with life. It shows how abundantly blessed you are by the universe as evidenced by the various things around you. It may not be directly evident at the moment, for this card follows the trauma of the Tower card. Remember that you hold within you all that you need for your fulfillment - the only thing that you need is courage. For this, you have all reasons to rejoice. To see this card is a message to have faith, for the universe will bless you and bring forth all that you need.\n' +
      '\n' +
      'To receive the Star in your reading means that you have gone and passed through a terrible life challenge. You have managed to go through this without losing your hope. While you suffered, you perhaps were not aware of your own strength, but you are now perhaps recognizing that the loss helped you discover your own resilience and inner power. It is only now that you can really appreciate all that you have.',
    meaningReversed: 'When the Star card is reversed, it means that you are feeling as though everything has turned against you. The challenges that you would normally see as exciting seem instead to make you feel as though you cannot overcome them. You have lost faith in something, whether inside yourself or with something you normally find dear. \n' +
      '\n' +
      'Without hope, without faith, we cannot find the motivation to progress forward in the challenges that we face. Where in your life are you feeling hopeless? In what ways do you already feel defeated? And how does that affect your actions? The star reversed asks us to nurture our sense of hope and positive energy to help propel our actions with joy instead of fear.',
    meaningLoveUpright: 'Lots of hope in love and romance is signaled by the Star tarot love meaning. It’s likely that your sense of hope and optimism can be a powerful magnet for you right now, giving you a sense of charisma and charm. If you have been healing from a break up, this card suggests that you are well on your way, and you are slowly rebuilding your confidence so that you can move on. If your relationship has been going through a rough patch, this also may be a time of healing. So long as the two of you remain communicative and honest with one another, there is great potential for bringing the two of you closer together.',
    meaningLoveReversed: 'Self doubt and a loss of faith is clouding your judgement with the reversed Star’s appearance. Are you suffering from a loss of confidence? Do you pick at your own flaws with excessive harshness? What is making you feel unworthy of love? Others can sense this with you, and this can make you feel even worse while reinforcing your negative feelings about yourself. It is important now to remember all the wonderful things about yourself, so that you can see yourself as a worthy partner. The doubt and loss of faith can also apply not just to yourself, but also to your feelings about love in general. If you have been single for a while, cynicism may make you believe that love only creates pain, or is an illusion that is not worth pursuing, when it is actually an attitude problem that pushes others away.',
    meaningCareerUpright: 'When it comes to work, remain faithful that your ambitions will be achieved. This can give you great positivity that others will notice, and can bring you the opportunities that you hoped for. Should you be searching for a new job or a promotion, the star is a reminder to keep your hopes high. If you’ve gone through a difficult or stressful time at work recently, the Star also signals a period of healing. This should be a quiet and peaceful time as you recuperate. ',
    meaningCareerReversed: 'With the reversed Star, it may be likely that your negativity is having an effect on your work. You may no longer feel enthusiastic or creative, because you can only see things in a pessimistic manner. Have your hopes not panned out? Have you given up faith that things can get better? When we despair, we make a bad situation worse, and the will to keep going can be snuffed out. It is likely that though things may be tense right now, it isn’t as bad as you seem to make of it. A change in your approach, perspective or attitude may be all that is needed in order to give you motivation to make positive changes. ',
    index: 17
  },
  {
    name: 'The Tower',
    description: 'The Tower card depicts a high spire nestled on top of the mountain. A lightning bolt strikes the tower which sets it ablaze. Flames are bursting in the windows and people are jumping out of the windows as an act of desperation. They perhaps signal the same figures we see chained in the Devil card earlier. They want to escape the turmoil and destruction within. The Tower is a symbol for the ambition that is constructed on faulty premises. The destruction of the tower must happen in order to clear out the old ways and welcome something new. Its revelations can come in a flash of truth or inspiration. ',
    keywordsGeneralUpright: [
      'disaster',
      'destruction',
      'upheaval',
      'trauma',
      'sudden change',
      'chaos'
    ],
    keywordsGeneralReversed: [
      'averting disaster',
      'delaying the inevitable',
      'resisting change'
    ],
    keywordsLoveUpright: [
      'breakup',
      'weak relationships ending',
      'foundational shift in view of love'
    ],
    keywordsLoveReversed: [ 'making adjustments in love', 'leaving a weak relationship' ],
    keywordsCareerUpright: [ 'sudden job loss', 'workplace disruption', 'workplace chaos' ],
    keywordsCareerReversed: [ 'surviving layoffs', 'avoiding taking risks in career' ],
    meaningUpright: "The Tower represents change in the most radical and momentous sense. It is for this reason that the card itself visually looks so unnerving. But it doesn't necessarily have to be truly frightening or ominous. Because at the heart of this card, its message is foundational, groundbreaking change.\n" +
      '\n' +
      'The kind of event that the Tower card marks does not have to be something terrible, like a disaster or a great loss.  Change itself is a normal part of life that one has to embrace. But it can sometimes strike fear, for it means that we must abandon the truths that we have known prior to this event. The old ways are no longer useful, and you must find another set of beliefs, values and processes to take their place.\n' +
      '\n' +
      'Be positive, it is time for you to replace the old foundations of the past with something that is more genuine and will serve you better in what is to come.\n' +
      '\n' +
      'In terms of work, there is an inevitable argument bound to happen. You need to be in control and keep your temper in check. Avoid saying something that may hurt other people. When it comes to your love life, your romantic relationship may be nearing its end. Take this as a warning - if you really value your relationship, then it is time for you to take damage control or open a communication to clear misunderstandings. In your finances, the tower meaning refers to the need to be assured on your transactions.',
    meaningReversed: 'When you get the Tower card reversed, you can feel some crisis looming along the horizon, and you are struggling as much as you can to try and avoid its manifestation. What you have not realized is that these breakdowns can be beneficial in breaking down your reliance on something that is false. The tower is built on faulty foundations, and it must fall. Though the destruction will be painful, the humbleness resulting from it can bring us peace.\n' +
      '\n' +
      'What you relied on will no longer be there for you. Do not take this as a drastic and depressing change, it is time for you to become more self-reliant. ',
    meaningLoveUpright: 'The Tower tarot love meaning signals great fundamental changes. Relationships that have weak or crumbling foundations won’t last much longer, and may collapse. While initially painful, these clear the way for new experiences. Perhaps your relationship was incredibly important to your identity; you took pride in being a good partner or parent, making you stay even while you may have otherwise been unhappy. While these times may be trying, know that they will pass. Should you be single, it may not be a relationship that is being broken down, but your perspective and understanding of the entire notion of what love means to you. What beliefs about love are not serving your highest self? These need to be transformed so you can develop an individual understanding of what your needs are when it comes to relationships.',
    meaningLoveReversed: 'Change is never an easy thing to accept, but regardless of how much we resist it, it will come. If you see any problems in your relationship looming in the distance, this is your chance to deal with them now. Doing so may prevent bigger problems later. Are your resentments building up? What have you been keeping quiet because you think it’s not worth arguing over? Slowly, these things may turn into big issues that can uproot an otherwise happy relationship. Sometimes, this card can also signal that you may be ready to leave a relationship that has not been working.',
    meaningCareerUpright: 'There can be a lot of stress right now when it comes to your career; the Tower can signify a sudden job loss, or the attainment of a new position that creates chaos due to sudden increases in responsibility. Something from the outside environment, like a new boss, or the loss of a colleague could mean disasters happening in the workplace. It is important to remember that at this time, though things are frustrating, that it is possible for these temporary messes to lead to a better long term future, such as a job that suits you better, or a more peaceful workplace in the long term.  ',
    meaningCareerReversed: 'Despite stressful situations at work, you may have been able to pull through. For example, if your workplace has gone through a series of layoffs or redundancies, you may find yourself amongst one of the lucky few that have managed to keep your job. This may come as a relief, or alternatively, can keep you from finding true fulfillment in your career. Sometimes, the Tower is the card that we all need to kick us out of our own stupor, and be motivated to leave the comfort of a monotonous job. This may be the chance you needed to open your eyes to what else could be awaiting you. ',
    index: 16
  },
  {
    name: 'The Devil',
    description: 'This card shows the Devil represented in his most well-known satyr form, otherwise known as Baphomet. Along with being half goat and half man, the devil has bat wings and an inverted pentagram on his forehead. He is standing on a pedestal, to which are chained a nude man and woman, as if to show that he has dominion over them.Both the man and the woman have horns, as if to show that the more time they spend with the Devil, the less human they become. The chains make it appear as though the devil has taken them captive. The man has a flame on his tail while a woman has a bowl of grapes on her tail, which symbolizes their addiction to power and finer things in life, respectively. Looking closely, both the man and the woman don’t look happy.  Their individual power has been taken from them, leaving them exposed and ashamed in their nakedness.',
    keywordsGeneralUpright: [
      'oppression',
      'addiction',
      'obsession',
      'dependency',
      'excess',
      'powerlessness',
      'limitations'
    ],
    keywordsGeneralReversed: [
      'independence',
      'freedom',
      'revelation',
      'release',
      'reclaiming power',
      'reclaiming control'
    ],
    keywordsLoveUpright: [
      'lust',
      'hedonism',
      'selfish disregard for lover’s feelings',
      'obsession'
    ],
    keywordsLoveReversed: [ 'feeling more in control of love life', 'ending co-dependency' ],
    keywordsCareerUpright: [ 'feeling trapped in job', 'blaming colleagues', 'self-sabotage' ],
    keywordsCareerReversed: [
      'more accountability in career path',
      'feeling empowered at job'
    ],
    meaningUpright: 'Getting the devil card in your reading shows that you have feelings of entrapment, emptiness and lack of fulfillment in your life. It might also mean that you are a slave to materialism and opulence and no matter how hard you try, you just can’t seem to shake off the feeling of wanting to indulge in luxurious living. You might be aware that this kind of lifestyle is leading you down the rabbit hole, but you have that feeling of not having any form of control over your actions or urges.\n' +
      '\n' +
      'Addiction to substances or material pleasures can also be the reason for your feelings of powerlessness and entrapment. In situations such as these, you may feel as though you are a slave, unable to control your impulses or willpower to direct yourself towards something other than the satisfaction of these desires. ',
    meaningReversed: 'The upside down meaning of the Devil card can be the moment when an individual becomes self-aware and breaks all of the chains that come with addiction and poor habits. It might be because they are tired of running in circles and are in need of change. But one thing is usually clear – breaking off these chains, especially those of addiction is never easy. So, one has to be prepared to make the necessary changes that might initially seem painful to make the adjustments that will pay off in the end by being able to find your true self again. Self-assessment is called for in this case and the individual needs to take some time and list all of the things that they need to get rid of. And once that has been done, and then it would be time for them to embark on the difficult journey of self-improvement.',
    meaningLoveUpright: 'Lust and temptation are symbolized by the Devil in a love tarot reading. There can be a sense of hedonism, and a selfish desire for gratification with this card. In less serious circumstances, it can also just simply mean a pursuit for all of life’s earthly pleasures. There is nothing wrong in having a bit of fun, but make sure that you are not hurting others or giving them wrong impressions when you do. If you’re only looking for hook-ups, it is up to you to communicate that with your dates. Make sure you avoid pressuring others if they decide your lifestyle isn’t something that suits them. Communication will be more important than ever now.Alternatively, the Devil tarot love meaning can also signal addiction, and in the context of love and relationships, co-dependency. Over time, this can be destructive to the individuality and self of both partners. Be wary, and ensure that the two of you remain strong individuals within your relationship.',
    meaningLoveReversed: 'The reversed Devil tarot love meaning can signal that you may be breaking free from some negative emotional patterns or addictions that have stood in the way of you developing strong relationships. You may feel more in control of your love life than ever. This card in some circumstances can also signal breaking away from a relationship with a domineering partner, or a co-dependent relationship that was not allowing you to express your true self. You may have recognized that the bonds that tied you to your partner were ones that were not healthy or supportive. Continue to nurture your own independence and be proud of what you have done.',
    meaningCareerUpright: 'You may feel stuck or trapped when it comes to your career right now, like you don’t have any options but to stay somewhere that you dislike. In this state, it may be easier to blame your circumstances, bad luck, or a host of external factors. You may feel dependent on this job, without the power to make the changes that would bring you happiness. At times, this card can also signal self-sabotage and playing the victim when it comes to work relations with your colleagues. Regardless of what it feels like, the Devil’s appearance can signal that you have more choices than you think you do, you only need to reclaim your power. This can be scary, to take accountability for a situation that you dislike, but it can also be empowering. ',
    meaningCareerReversed: 'When it comes to work, you are in the process of reclaiming your accountability in your career choices, and are in the process of making some much needed changes to avoid future issues. If you’ve been in a position that you’ve found stifling, you may be taking action; whether that means leaving an unfulfilling job, or an unhealthy environment, or choosing to fix a strained relationship with a colleague. You may no longer feel dependent on your job for a sense of stability, understanding that you can find it within yourself. Take note of the changes that occur when you rediscover your independence.  ',
    index: 15
  },
  {
    name: 'Temperance',
    description: 'On the Temperance card, there is an angel with wings, whose gender is not immediately obvious, which suggests that there is a balance between the sexes. One foot of the angel is in water, to represent the subconscious, while the other foot is on dry land, a representation of the material world. On her robe, there is a square, which has a triangle inscribed inside, another echo of the tangible earth in union with the holy trinity. She holds two cups in a manner where she can mix the waters, which represent the super and subconscious minds. The water flows between them, suggesting union and infinity.Everything about this card represents balance, the perfect harmony that comes from the union of dualities. Her advice is to test any new waters, before jumping into the deep end.',
    keywordsGeneralUpright: [
      'balance',
      'peace',
      'patience',
      'moderation',
      'calm',
      'tranquillity',
      'harmony',
      'serenity'
    ],
    keywordsGeneralReversed: [
      'imbalance',
      'excess',
      'extremes',
      'discord',
      'recklessness',
      'hastiness'
    ],
    keywordsLoveUpright: [
      'careful and considerate with love',
      'being patient with love or lover'
    ],
    keywordsLoveReversed: [
      'going to extremes for love',
      'all or nothing romances',
      'impatience'
    ],
    keywordsCareerUpright: [
      'success from patience and moderation',
      'steady and slow progress'
    ],
    keywordsCareerReversed: [
      'work-life imbalance',
      'all or nothing at job',
      'rushed job',
      'reckless decisions'
    ],
    meaningUpright: 'In moments where there is anxiety or great stress, you have been able to remain calm throughout. You are a person who has mastered the art of not letting things get to you, and this allows you to achieve much progress in all areas you seek out to explore. The Temperance tarot card suggests moderation and balance, coupled with a lot of patience. Where this card appears, there is the suggestion that extremity in any situation is to be avoided.\n' +
      '\n' +
      'The Temperance card implies that you have a clear vision and know what you want to achieve. This is an indication of higher learning, which is a critical attribute in the journey of life. It reflects that you have found peace with what you are doing and everything is unfolding as it ought to. The Temperance card, in relation to other people, shows that you are able to adapt and work in harmony with your community, your coworkers and your loved ones. Your calmness in all matters gives them comfort and puts them at ease.Temperance may also indicate a time to evaluate and re-examine the priorities you have chosen. This will help you create a balance between your outer and inner self. At the end of it all, you will find greater purpose and meaning in your actions, for her message is that we cannot live fully in either. ',
    meaningReversed: 'Temperance in reversed is a reflection of something that is out of balance and may be causing stress and anxiety. The real meaning of the Temperance card can be deciphered using the other cards in the spread to identify areas where this imbalance is being caused. A Temperance in reversal may also be used as a warning;  if you take a certain path, it would lead to turbulence and excess.Lack of a long-term plan or vision may also be the Temperance reversal meaning. This creates a lack of purpose for you, leaving you feeling lopsided as you search here and there for what you should be doing. You must reflect and think carefully about what needs to change. Temperance reminds us that all things are only good in moderation, and that we must examine in which aspects of our lives we are breaking the balance.',
    meaningLoveUpright: 'In romance, the upright Temperance tarot love meaning suggests patience, moderation, understanding and going the middle path. This card indicates that we must avoid going to extremes, and to be cautious and thoughtful of our actions. Consider your actions when it comes to love; and in what aspects your attitudes, beliefs or thoughts can be excessive. Are you too pushy with potential partners? Or instead, are you too reserved? Are you too giving? Or are you not giving enough? How can you bring these traits into balance? In addition, your relationship or potential relationships may require some patience right now, and attempt to work together to find compromise and harmony.',
    meaningLoveReversed: 'In love, do you tend to think in all or nothing terms? Love, like many things in life, are full of grey areas. When reversed Temperance appears in a love tarot reading, your intensity may be surprising right now. Sometimes, no matter our best efforts, we can’t force love to come into being. You may benefit from being a bit more patient, while also making sure that your own emotions or desires do not go into extremes. When your date does something that is displeasing to you, do you tend to immediately reject them? Are you too demanding on your potential partners, so that nobody ever can satisfy you? It’s important to remember that humans can never be perfect; make sure your desires are reasonable.',
    meaningCareerUpright: 'Patience and moderation may be helpful tools for you to achieve your career goals. You are likely to find what you desire when it comes to your work, but it may come slowly and quietly as you put in the work every day. Your dedication and ability to navigate emotionally charged situations at work with calm can help you be noticed by your peers and superiors. When it comes to making changes in your career path, the Temperance card can be a reminder to remain patient, steady and devoted; all good things take time. Temperance can also signal doing a good job in balancing your career with different aspects of your life; it is neither an all consuming ambition or just a paycheck to you. ',
    meaningCareerReversed: 'Something at work may be suffering from a lack of balance right now. Do you tend to go all in when it comes to your work, so much so that other aspects of your life suffer? Are you always pulling all-nighters, hoping that it all pays off in the end? Or alternatively, do you find that you slack off, leading to resentment from your colleagues? While the former can bring you success, this can be damaging to you in the long term. If this applies to you, look to correct this imbalance. Ensure that when completing projects, you aren’t rushing through them or making reckless choices; the quality of your work may be suffering.',
    index: 14
  },
  {
    name: 'Death',
    description: 'Here, we see Death riding a beautiful white horse while holding up a black flag with a white pattern. It is portrayed as a living skeleton, the bones being the only part of the human body existing after death. He wears armor, which gives him his invincibility - signaling that no one can destroy Death. The white horse that he rides stands for purity, as Death purifies everyone. Beneath him, all classes of humans lie in the dirt - a king, and a pauper, meant to remind us that death does not differentiate between class, race, gender. ',
    keywordsGeneralUpright: [
      'transformation',
      'endings',
      'change',
      'transition',
      'letting go',
      'release'
    ],
    keywordsGeneralReversed: [
      'fear of change',
      'repeating negative patterns',
      'resisting change',
      'stagnancy',
      'decay'
    ],
    keywordsLoveUpright: [
      'changes in relationship',
      'changes in romantic life',
      'ending relationship'
    ],
    keywordsLoveReversed: [
      'resisting change in relationship',
      'failure to change negative emotional patterns'
    ],
    keywordsCareerUpright: [
      'job transition',
      'career transition',
      'leaving unfulfilling career'
    ],
    keywordsCareerReversed: [
      'repeating negative patterns at work',
      'remaining at unfulfilling job',
      'lack of growth'
    ],
    meaningUpright: 'Death is one of the most feared cards in a Tarot Deck, and it is very misunderstood. Many people avoid mentioning this card because it has that much power. Most times, people take the name of the card literally. However, the real meaning within the Death card is one of the most positive in the whole deck.The Death card signals that one major phase in your life is ending, and a new one is going to start. You just need to close one door, so the new one will open. The past needs to be placed behind you, so you can focus your energy on what is ahead of you.\n' +
      '\n' +
      'Another meaning is that you are going to go through a major change, transition, or transformation. The old version of you needs to ‘die’ to allow the new you to be created. This can be a scary time for you because you may be unsure of what will happen in the future. Even if you are scared, you should welcome the change because you are opening the door to new life events. Death can also mean that you need to let go of any unhealthy attachments that you have in your life. This is an important part of life, so learning to keep moving forward is one of the lessons Death teaches us.',
    meaningReversed: 'The Death reversal meaning is still about change, but that you have been resisting it. You could be worried about letting go of the past, or you could not be sure of the changes that you need to make to go forward. Resisting the change and holding onto the past can limit your future, which can cause you to feel like you are in limbo. You should take some time to assess the ways that you have been approaching changes in your life. You may find you have been halting the changes that you need due to fears of the unknown. While you can still be afraid, you should trust that you are taking the right steps and move forward. Life moves on, so fighting passing time is only going to leave you with regrets. Death does not have to be a card of regret, especially if you heed its warning.',
    meaningLoveUpright: "When it comes to love and relationships, the Death tarot card love meaning can indicate being stuck in emotional dynamics that are no longer working. If you are already in a relationship, for the relationship to continue, you must learn to embrace change. Sometimes, this card can also indicate that you may want to end the relationship, especially if it hasn't been going well. It is important to remember that all doors that close with the Death tarot card open another. While Death may be difficult to accept in a love tarot reading, transformations for one partner or another may be what is needed to help both individuals grow. It is also important to remember that the cards are suggestions, and that you have the choice to either accept and welcome your relationship's transformation, or let it go.\n" +
      '\n' +
      'While initially scary, the transformations that the Death tarot card can bring to love can also be positive. In less stressful terms, it can be the coming of a new era, such as an engagement.\n' +
      '\n' +
      'If you are not in a relationship, the Death tarot card love meaning can instead point to beliefs, attitudes or behaviors that you are currently shedding that can help you develop healthier, stronger relationships.',
    meaningLoveReversed: 'The Death tarot card love meaning in reverse can signal strong resistance to change when it comes to your approach and attitude to relationships and romance. This can come in the form of hanging onto a relationship that is stagnant and no longer helping either of you grow as individuals. There may also be dependence on the relationship, or you may only remain together because you feel comfortable, obligated or scared of being alone.\n' +
      '\n' +
      'On the other hand, old relationships can also be revived. If you are single, Death reversed in a love tarot reading can suggest that you must avoid negative  patterns and dynamics to be able to truly engage in a loving relationship. You may have self-esteem issues, savior complexes, or wounds that you need to heal in order to find a partner that will love and respect you, and one you can love and respect in return.',
    meaningCareerUpright: 'If you’ve been considering a career change, the upright Death card can be a signal that you should take the plunge and act now. You may have been through a period of apathy, disinterest and frustration at your current job, and should you not take decisive action, events in life may force you to make a change. You may be clinging to your current path because it offers stability, certainty and safety, but if you are otherwise unhappy or feeling unchallenged, there is much more to lose than your comfort. Often when one door closes, another one opens; embrace the shifts occurring right now and dive in. ',
    meaningCareerReversed: 'As with this card’s upright version, you are being pushed to a change when it comes to your job or your career path. But in reverse, you may be doing all you can to resist this transition. You may stick around despite the unhealthy environment, the reduced pay, or the monotonous projects. Change is inevitable; this applies to our career as well as other aspects of our lives. We must learn to welcome it instead of pushing it away. When we cling to a cycle that is no longer meant to remain in our lives, we watch it slowly decay and drain us. At times, this card can also represent negative patterns repeating once again in your workplace. Do you self-sabotage? Does your defensiveness when making mistakes create trouble? Does your impostor syndrome affect how you interact with your colleagues? Consider what must be let go for you to release these unhealthy patterns. ',
    index: 13
  },
  {
    name: 'The Hanged Man',
    description: 'In this card, it depicts a man who is suspended upside-down, and he is hanging by his foot from the living world tree. This tree is rooted deep down in the underworld, and it is known to support the heavens. It is believed that the hanging man is actually positioned there by his own free will. We believe this because of the serene expression which is on his face. His right foot is bound to the branches, but his left foot remains perfectly free. At the same time, he is holding his hands behind his back in a way which forms an inverted triangle. His wearing of red pants are a representation of the physical body and human’s passion, while the blue that he wears in his shirt are representative of calm emotions, a color combination that is commonly seen in saints. His intellect is symbolized by the yellow color of his shoes, hair and halo. ',
    keywordsGeneralUpright: [
      'sacrifice',
      'waiting',
      'uncertainty',
      'lack of direction',
      'perspective',
      'contemplation'
    ],
    keywordsGeneralReversed: [
      'stalling',
      'disinterest',
      'stagnation',
      'avoiding sacrifice',
      'standstill',
      'apathy'
    ],
    keywordsLoveUpright: [
      'love can’t be rushed',
      'avoid romantic pressure',
      'sacrifice for love'
    ],
    keywordsLoveReversed: [ 'new perspectives on love', 'changes in romantic life' ],
    keywordsCareerUpright: [
      'uncertainty about career',
      'waiting',
      'forced break',
      'thinking of next steps'
    ],
    keywordsCareerReversed: [
      'new career move not working',
      'procrastination',
      'stalling for time'
    ],
    meaningUpright: 'The hanged man understands that his position is a sacrifice that he needed to make in order to progress forward - whether as repentance for past wrongdoings, or a calculated step backward to recalculate his path onward. This time he spends here will not be wasted, he does this as part of his progression forward. His upside down state can also symbolize the feeling of those that walk a spiritual path, for they see the world differently. Where there are others that do not understand the need to sacrifice, you see it differently. This is a natural course of action for you as you walk the path alone.\n' +
      '\n' +
      'The Hanged Man card reflects a particular need to suspend certain action. As a result, this might indicate a certain period of indecision. This means that certain actions or decisions which need to be properly implemented are likely to be postponed even if there is an urgency to act at this particular moment. In fact, it would be ultimately the best if you are capable of stalling certain actions in order to ensure that you have more time to reflect on making critical decisions, this will ultimately be the best.\n' +
      '\n' +
      'This is a card which is mainly designated towards waiting and suspension. This suggests that this might be the thing that you need to do in order to achieve success or to wait for the proper opportunity. Keep in mind that taking action is not always the best solution and in certain cases refraining from doing so might bring you just as much, if not more benefits.',
    meaningReversed: 'The reversal meaning of the Hanged Man card represents a very specific period of time during which you feel as if you are sacrificing a significant amount of time while getting nothing in return. You might have felt as if certain things are at a state of an absolute standstill without any particular resolution or movement. It’s as if you are putting your entire effort and attention into something but nothing turns out as it should.',
    meaningLoveUpright: 'In general, the Hanged Man is about sacrifice, new perspectives and waiting for the right time. For singles, the upright Hanged Man tarot love meaning indicates that things cannot be rushed. Regardless of how much you throw yourself into your romantic pursuits, or message your date all the right things, it may not be up to you if the other party isn’t ready. Instead of trying to force or pressure a relationship to come into fruition, use this time to see how your perspective changes when you’re alone. This same thing applies within relationships as well. Timing may be an issue when it comes to having important discussions, or taking your relationship to the next level. Alternatively, the concept of sacrifice may play an important role in your relationships, or potential relationships now. Help may be needed, and these can be moments in which your commitment is tested, but can also bring the two of you closer together.',
    meaningLoveReversed: 'Now is the time for action. The reversed Hanged Man tarot love meaning suggests that the period of waiting is over. There may have been a slowdown in your love life recently, forcing you to take the time to consider different perspectives on romance and love. Ideally, you have re-emerged with a clearer understanding of what it is you expect from relationships. This may be a time when old, long held beliefs are being shed. With this new perspective, you are now equipped to take action or make changes in your romantic life with renewed energy. This card also can caution against making needless sacrifices for love. Make sure that your needs and your partner’s are balanced.',
    meaningCareerUpright: 'When it comes to work, the Hanged Man can signal a feeling of waiting or uncertainty about what you should be doing. Your projects may be on pause, forcing you to take a break, or you may be waiting and contemplating what your next move is. There is a lesson to this card, which is that sometimes, no matter what, you cannot force a decision, or changes to occur when things are not at the right time. At times, you need to just wait, and the things that you were pushing for so hard, whether it’s a response from a business partner or colleague, or a decision from a client, or a decision on what to change in your career, will come in time. Relax, and just be. Alternatively, you may be in the process of making a big change in your career. What looks like taking a step backward may be a calculated process to realign your path with something that is more fulfilling to you. ',
    meaningCareerReversed: 'When the Hanged Man is reversed, you may feel that the sacrifices you’ve been making in your career haven’t really been yielding results. If you’ve recently changed career paths, or have taken time off to go through retraining, or used your family time for work projects, things may not be going as planned. It may not feel as if making these changes have been worth it. At times, this card can also indicate stalling for time. Instead of waiting for the right moment, you may be at such a loss about what to do next that you’ve been procrastinating on making a decision that will propel you to your next steps, leading to a feeling of powerlessness or stagnancy. Don’t languish too long, learn to be an active participant in your life. ',
    index: 12
  },
  {
    name: 'Justice',
    description: 'The Justice tarot card is a symbol of truth, fairness, and law. As she sits in her chair, the scales in her left hand represent how intuition should balance logic. She symbolizes impartiality with the double-edged sword in her right hand. The clarity in thought which is required to dispense justice are symbolized by the square on the crown she wears. Behind her, there is a purple cloak and standing grey pillars. Beneath her red cloak, which is held together by a clasp, she shows the tip of a white shoe. This is a spiritual reminder that what she delivers are the outcomes of their actions.',
    keywordsGeneralUpright: [
      'justice',
      'karma',
      'consequence',
      'accountability',
      'law',
      'truth',
      'honesty',
      'integrity',
      'cause and effect'
    ],
    keywordsGeneralReversed: [
      'injustice',
      'retribution',
      'dishonesty',
      'corruption',
      'dishonesty',
      'unfairness',
      'avoiding accountability'
    ],
    keywordsLoveUpright: [
      'romantic efforts rewarded',
      'compromise',
      'treating partner fairly'
    ],
    keywordsLoveReversed: [ 'unfair romantic expectations', 'blaming partner unfairly' ],
    keywordsCareerUpright: [ 'integrity at work rewarded', 'remaining accountable and fair' ],
    keywordsCareerReversed: [
      'unfair work environment',
      'dishonesty in career',
      'not being accountable'
    ],
    meaningUpright: 'The decisions that you make now have long-term effects in all things, both for yourself and others. There will always come a time where you will be judged. The Justice tarot card appearing in a reading signals that a judgment will be made fairly and accordingly. The decisions that you have made in the past will be carefully weighed with fairness. Your feelings around this card may differ depending on your situation.\n' +
      '\n' +
      "If you have been wronged, this card's appearance may bring you relief. On the other hand, if your actions caused pain to others, this card serves as a warning. Her appearance represents a chance for you to change your actions now for a better future. When a tarot card reading shows the figure of justice, it is time to account for your actions.\n" +
      '\n' +
      "Another meaning of the Justice card is truth. Truth must come to pass, and this cannot be found from the mouths and gossip of others. Instead, it's based on facts. Learn the truth about others and yourself, speak and know the truth before passing a judgment. During a reading, when you see the Justice Tarot card, you need to be fair in all your deeds. By following the right procedure to learn the truth, you will understand what your tasks are.Another meaning of Justice Tarot card during a reading is to symbolize that attention is needed. It could be about your life, career or just an important decision that you need to make. If you have been unsure about something, it is time to get a solution once and for all.",
    meaningReversed: 'A reversed Justice tarot card could indicate various things. One Justice reversal meaning is to show you are living in denial. You are not willing to accept the consequences of your actions or others. You are running from your guilt. You must however, be aware that these are actions that are in the past. Your future depends on your actions today - and what you will do to tip the scales in balance again. How can you make up for your wrongs? Taking action gives you a chance to change and stop judging yourself. In legal matters, this could represent an unfair outcome of a case that you will not accept.',
    meaningLoveUpright: 'Justice is about karma, and if you’ve been putting forth the effort, love and romance will be coming your way. If you’ve been kind, loving and supportive, your relationships will be a mirror of what you’ve been giving to others. If you’ve been single, your loving and positive disposition will make you especially attractive to new potential romances. Because this card is all about the law of cause and effect, make sure you have been treating your partner fairly. Watch out for resentment and defensiveness, and ensure that conflicts in your relationships are handled with respect and trust in your other half. Compromise and understanding is needed now. Sometimes this card is also about being tactful, and expressing your frustrations in a way that are mindful of your partner’s feelings. As long as issues hare handled with honesty and good faith, your relationship will thrive.',
    meaningLoveReversed: 'Sometimes, love and romance can be unfair. You may be doing your part in putting yourself out in the world, but luck is still not on your side. Whatever the case may be, sometimes one must grit their teeth and carry on. Now may also be a good time to check whether your are being fair with your expectations about love. Are you looking for someone absolutely perfect, but are unable or unwilling to work on your own flaws? Be honest with your requirements, as well as your own baggage. If you’re in a relationship, this may be a difficult time, and fairness and compromise are needed more than ever. Don’t blame others, or your partner for things that are your responsibility.',
    meaningCareerUpright: 'If you’ve been involved in any workplace disputes, the Justice card can signal that everything should work out in your favor as long as you’ve been truthful, honest and fair with your dealings. If this doesn’t apply to you, this card can simply be a reminder to always act with integrity, and ensure that you take responsibility for your actions, even when you make a mistake. As scary as this can be sometimes, others will trust and respect you for your honesty and commitment to truth. With fair and balanced dealings, your career can flourish.',
    meaningCareerReversed: 'You may be dealing with some unfair situations at work right now. This can mean taking the blame for someone else, or others attempting to undermine the quality of your work. While it may be tempting to fight fire with fire, this can only worsen the issue. Remain reasonable, logical and forthright with how you handle this situation. With reversed Justice, you may find that heated confrontations can mean the blame will rest on you. Sometimes, this card can also signal that you haven’t quite been honest when it comes to your career. This can lead to trouble for you in the future; or even if it doesn’t, can lead to continued anxiety as you wonder when the other shoe will drop. If you still have time, make amends and change your habits now. If you have been avoiding accountability for a mistake and hoping that the blame may fall on others, not only are you eroding trust between you and your colleagues, but you are also throwing away a chance to learn from your mistakes and grow. ',
    index: 11
  },
  {
    name: 'Wheel of Fortune',
    description: 'The Wheel of Fortune is one of the most highly symbolic cards in the deck, filled with signs that each have its own meaning. At the center of the card, lies a giant wheel, covered in esoteric symbols. There are different creatures that surround the wheel; the angel, the eagle, the bull and the lion. They are related to four fixed signs in the zodiac - leo, taurus, scorpio and aquarius. These four animals are also representatives for the four evangelists in Christian traditions, which is perhaps the reason that they are all adorned with wings.\n' +
      '\n' +
      'The books that each of the creatures hold represents the Torah which communicates wisdom and self-understanding. The snake indicates the act of descending into material world. On the wheel itself, rides a sphinx that sits at the top, and what appears to be either a devil, or Anubis himself arising at the bottom. These two Egyptian figures are representative of both the wisdom of the gods and kings (in the case of the sphinx) and the underworld (Anubis). They are rotating forever, in a cycle, and suggests that as one comes up, the other goes down.',
    keywordsGeneralUpright: [
      'change',
      'cycles',
      'fate',
      'decisive moments',
      'luck',
      'fortune',
      'unexpected events'
    ],
    keywordsGeneralReversed: [
      'bad luck',
      'lack of control',
      'clinging to control',
      'unwelcome changes',
      'delays'
    ],
    keywordsLoveUpright: [
      'relationship changes',
      'navigating change with partner',
      'making adjustments'
    ],
    keywordsLoveReversed: [
      'external events affecting relationship',
      'love life out of control'
    ],
    keywordsCareerUpright: [
      'luck in career',
      'opportunities present',
      'adapting to changes at work'
    ],
    keywordsCareerReversed: [ 'failure to adapt at work', 'forcing past solutions' ],
    meaningUpright: 'The Wheel of Fortune turns evermore, seemingly to communicate that life is made up of both good and bad times, and that the cycle is one that we cannot control. It is something that is subjected to both kings and workers, and that nobody on earth can avoid what is fated. When you have good moments in your life, make sure that you enjoy to the fullest, for what comes up must always go down. The same is true in reverse - when you are in a bad situation, things will eventually become better again. \n' +
      '\n' +
      'Greater forces that are outside of human control are at work here. The same forces that govern the changing of the seasons, or the rising and setting of the sun is also the master of luck and the fate of individuals. Where it lands is as random as chance - you may find yourself at either the top or bottom, but remember that no matter what the outcome it may not last for very long, for the wheel always turns.',
    meaningReversed: "When the wheel is reversed, it means that luck has not been on your side and misfortunes have been following you. When it's associated with this card, you must understand that these are due to external influences that you cannot control. Like the wheel, our luck and our fate is always in motion, and sometimes we are on the bottom. Be assured that the wheel will turn again, and you will be okay again soon. What you shouldn't do however, is cling to the illusion of control. Perhaps in this turn of the wheel, the lesson is to learn to let go and release. There are things that cannot be moved by human will and action alone. When we do not let go, it can bring only more suffering, for you may blame yourself for actions that could not have altered the situation. When we learn to accept, we also learn to forgive ourselves. We learn to move on, and move forward - and eventually, we learn that this feeling of acceptance can push the wheel again forward, and move it towards a new cycle.",
    meaningLoveUpright: 'Life is full of unexpected changes, and love is no different. The Wheel of Fortune tarot love meaning can signal great changes in your relationship, perhaps one that you didn’t see coming. These aren’t necessarily bad things, but adjustments may have to be made. The commitment you have with your partner may be tested now, and both of you may have to put in some effort or sacrifice in order to remain together. Should you choose to make the choice, your partnership may become closer than ever as the two of you learn to navigate the ups and downs of life together as a team. It is important to understand that whether the changes are positive or negative, they are not forever, for the wheel is always turning.',
    meaningLoveReversed: 'There are times, that no matter how much we try, the world will not bend to one’s will. Life may have thrown an unexpected wrench into your plans, and there is not much that you can do other than remember that this too will pass. It is likely that some external factor may be affecting your relationships right now, and you may have to adapt to it, and accept it with patience rather than attempting to control this situation. Other aspects of your life may be demanding right now, as your romantic life may have to take a pause. If you are in a partnership, try and tackle these problems as a team and communicate openly.',
    meaningCareerUpright: 'Big changes may be coming when it comes to your career. Should you be considering making a switch in your career path or your position, now may be a good time to make those moves. Try and be more aware of the opportunities that are in your environment for you now, and say yes when they arise. Sometimes, the changes that are coming your way may be difficult and challenging, but these can actually be blessings for you to develop your skills and get you ready for future growth. Embrace these changes, and make yourself adaptable. Going alongside the flow of these changes is likely to bring you success.  ',
    meaningCareerReversed: 'Are things in your work life changing quickly? You may find it difficult to keep up at the moment. All these surprises are things that may feel disruptive to your plans. You may keep trying to make a past solution work, instead of flowing alongside the events that are unfolding right now. It is important to not cling to the past or your expectations, but instead remain flexible and ready to change your plans. Are your responsibilities changing at work? Does your project’s requirements keep updating? This can be very frustrating, but instead of fighting it, try and figure out your own process to deal with it. It’s important to make sure you find your center. ',
    index: 10
  },
  {
    name: 'The Hermit',
    description: 'The Hermit depicts an old man standing alone at the peak of the mountain while holding a lantern in one of his hands and a staff on the other. The mountain denotes accomplishment, development, and success. The hermit tarot card refers to the level of spiritual knowledge that he attained, and that he is ready to impart that knowledge to everyone. There is also a deep commitment he has to his goal and a solid awareness of the path that he is taking. Inside the lantern, you will notice a star with 6 points which is also known as the Seal of Solomon. This symbol represents wisdom. The staff that he holds depicts authority and power.',
    keywordsGeneralUpright: [
      'self-reflection',
      'introspection',
      'contemplation',
      'withdrawal',
      'solitude',
      'search for self'
    ],
    keywordsGeneralReversed: [
      'loneliness',
      'isolation',
      'recluse',
      'being anti-social',
      'rejection',
      'returning to society'
    ],
    keywordsLoveUpright: [
      'pause in love life to introspect',
      'self-understanding in love'
    ],
    keywordsLoveReversed: [
      'romantic rejection',
      'loneliness',
      'feeling distant from partner'
    ],
    keywordsCareerUpright: [
      'contemplating next steps in career',
      'searching for purpose in career'
    ],
    keywordsCareerReversed: [
      'realigning career to internal goals',
      'outcast at work',
      'working alone'
    ],
    meaningUpright: 'The Hermit is a seeker for the knowledge that comes from within. A lonely wanderer in the path of the night, he searches for that which can only be gained with long periods of solitude - the inner voice. To hear it, he must disconnect from the crowds whose voices and desires threaten to overcome his own. He walks through the dark night of his unconscious, guided only by the low light of the northern star, with his destination being his home, his self.\n' +
      '\n' +
      "You are currently contemplating that you need to be alone. Never be afraid to take this chance to reflect, as it could help you clear your mind of all the clutter that comes with everyday life. The Hermit may also refer to your effort in taking action that is authentic and aligned with your true self. You are perhaps searching your inner soul for guidance on what is right, and where your next steps are to be.The hermit's appearance in a reading can also denote the appearance of someone who will come to your life that will be your mentor.",
    meaningReversed: "When reversed, you are perhaps in a situation where you'd like to be alone; there is nothing wrong about that. However, there is a possibility that your seclusion may become harmful to both yourself and others. Though the Hermit sets forwards with noble intentions to search for his inner truth, his path inward may also be filled with great danger. Going inward may lead to madness and the abyss, for the unconscious is filled with images that he may not yet understand, lurking and waiting to lure you ever inside. Like a man that gets lost in his own dreams, the hermit may find himself stuck in a world of his own, alone, trapped, unreal. You must learn to balance your need for truth with connection to your fellow human.\n" +
      '\n' +
      'When it comes to work, the hermit reversal meaning refers to your preparedness to get to the bottom of something that has been troubling you for quite some time now. There is searching to be done, and it will be your responsibility to ask the question that will allow the other people to understand the circumstances.',
    meaningLoveUpright: 'Love, being one of life’s greatest mysteries, can be a great teacher. It requires all of us to truly know ourselves, our needs, our fears and our insecurities. The Hermit tarot love meaning can signal that we may need some time alone in order to develop some insight about our selves before forming a strong romantic relationship with another person. This period may feel a bit lonely, but it will place you on the right path to finding a love that you are meant to have. If you’re already in a relationship, this soul-searching is something that the two of you may want to do together. Both of you may want to think about what you expect out of a relationship, and what may make you happier. The initial talks may be uncomfortable, but will prepare a strong foundation for tackling the future ahead.',
    meaningLoveReversed: 'The reversed Hermit tarot love meaning can indicate a period of loneliness, one that is being forced on you instead of one that you are initiating yourself. While this time may be trying, making the most of it can help you concentrate on your own goals, and clarify what it is you want from a partner and from life. These will be the building blocks for creating a strong future relationship. Should you already be in a relationship, you may find that one of you feels distant and is drifting away. Someone may feel alone in the partnership, despite each person’s efforts. Now is the time to examine these dynamics and see whether you can extend a hand. Attention, care and a strong dose of self-awareness may be needed in order to feel connected again.',
    meaningCareerUpright: 'You may be spending some much needed time thinking about what you want out of your career right now. You may feel as though the path you are treading at the moment is not really working for you, and there can be the sense of not being fulfilled. Right now, you are trying to understand what kind of work would give you joy on all levels. If you’ve been pursuing a career purely for money, or financial stability, these qualifications are no longer enough for you. You may be looking for a purpose, or at least something that gets you closer to who you want to be.  ',
    meaningCareerReversed: 'At times, the reversed Hermit can signal coming out of a period of contemplation. You may be ready to rejoin society, this time with a clearer understanding of what it is you want in terms of your career. You may now need to do a bit of realignment, whether it’s looking for a new job, networking to find mentors and teammates, or other more socially related aspects of developing your career. On the other hand, it can also be that your period of solitude can be extending further; you may choose to avoid working with others altogether. Being on your own may feel much less limiting at first; but make sure you continue to receive social support. At times, this card can also indicate being forced to work alone, leading to feelings of loneliness, or being an outcast amongst your coworkers. ',
    index: 9
  },
  {
    name: 'Strength',
    description: 'In this tarot card, you will see a woman who calmly holds the jaws of a fully grown lion. Despite the fact that the lion looks menacing and strong, the woman seems to have dominion over it. What is captivating is how gracefully she controls the lion. She is calm and collected, which is representative for being in control and disciplined especially in times of great adversities.The fact that she is also holding the jaws of a lion also shows that she has courage. Her control of the lion without being too rough shows love and compassion. The blue background over the mountains shows stability and the kind of calmness that comes with being stable. The lion is a symbol of courage, passion and desire which are very much part of the human feelings that are necessary for survival. But if these feelings are not put in check can lead to our eventual destruction.',
    keywordsGeneralUpright: [
      'courage',
      'bravery',
      'confidence',
      'compassion',
      'self-confidence',
      'inner power'
    ],
    keywordsGeneralReversed: [
      'self-doubt',
      'weakness',
      'low confidence',
      'inadequacy',
      'cowardice',
      'forcefulness'
    ],
    keywordsLoveUpright: [ 'confidence drawing lovers', 'strong caring relationship' ],
    keywordsLoveReversed: [ 'self esteem issues', 'insecurity', 'negativity about love' ],
    keywordsCareerUpright: [ 'self mastery at work', 'bold career moves', 'taking big steps' ],
    keywordsCareerReversed: [ 'impostor syndrome', 'insecurity', 'fear of making big moves' ],
    meaningUpright: "When you get the Strength card in an upright manner during your tarot reading, then it shows that you have inner strength and fortitude during moments of danger and distress. It shows that you have the ability to remain calm and strong even when your life is going through immense struggle. It also shows that you are a compassionate person and you always have time for other people even if it's at your own expense.\n" +
      '\n' +
      'Getting the strength card means that you are a very patient individual who is likely to accomplish anything that they put their mind to. Your resilience will greatly aid you, and your fearlessness means that you should have no issues speaking your mind. This card also indicates this kind of compassion will always be rewarded with having a lot of stability in your life either presently on in the near future.',
    meaningReversed: 'An upside down Strength card can mean that you are (or about to) experience an intense anger or fear in your life. You seem to be lacking the inner strength that this card normally represents, meaning you might be experiencing fear, and a lack of conviction and confidence in your own abilities. This can mean that you have forgotten all about your passions and the kind of joy, happiness, and fulfillment that came with doing what you love. A reversed strength card in a reading might also mean that one is experiencing depression because of a number of reasons and because of that, it is draining all of the happiness from their lives.One might end up being withdrawn from society because of the unhappiness or depression since they may feel people are the reason why they are so sad. It can also be a sign of jealousy, especially when everyone seems to be happy or excelling in every aspect of life while you are stagnating. This card indicates that you must learn to gain confidence in order to re-harness your inner strength.',
    meaningLoveUpright: 'You may find yourself in a passionate and fiery romance when you draw the Strength card in a love tarot reading. The intense feelings suggested by this card can indicate both a strong relationship, and also one that can be prone to anger, jealousy or other emotional explosions. There are both pros and cons with this kind of relationship. Alternatively, Strength’s tarot love meaning is one of compassion, empathy and inner strength; you may find that these qualities are bound to attract the partners that you need, or bring you and your existing partner closer together than ever. Empathy may give you greater insight to both yours and your partner’s needs and insecurities. Should you find yourself in an argument or in heated moments, it may be better for you to treat each other with patience and gentleness, rather than allowing your anger to take control.',
    meaningLoveReversed: 'In a love tarot reading, when Strength is reversed, the card can signal a bit of codependency in your relationship. This may stem from some forms of insecurity that make it difficult for you and your partner to be more independent and pursue your own interests. Being full individuals with your own lives brings more to your partnership; it doesn’t detract from it. Make sure that there is a strong sense of trust in your partnership. A reversed Strength tarot love meaning can also indicate that force and power are becoming more apparent themes in your relationship. One partner may be becoming more and more domineering, instead of empathic and understanding. You may have to make sure that one partner’s needs aren’t being trampled over in favor of another’s.',
    meaningCareerUpright: 'If you could harness your animalistic instincts; your anger, your drive and passion, you can take big steps in your career. This doesn’t mean to let these instincts take over, but rather work in harmony with them, or channel them into productive use. Here is where you’ll be able to find your power; this card signals that you likely already have the talent and the skill, you only need to muster your courage to make big moves. If you’re looking for a promotion, do something to get noticed. If you’re looking to change your entire career, take the plunge and do it. If you’re dreaming about starting your own business, push yourself to take those next steps and just start.',
    meaningCareerReversed: 'Have your fears been standing in the way of your career aspirations? The reversed Strength card suggests that you may have everything you need in order to find success, except perhaps a healthy dose of confidence and belief in yourself. You may constantly second-guess yourself, letting your anxiety and self-doubt take control and prevent you from making the choices that can propel your career forward. If you actually took a closer look at yourself, you would find that you are more capable than you actually believe. Trust in your own abilities, and others will trust you as well. ',
    index: 8
  },
  {
    name: 'The Chariot',
    description: 'The Chariot tarot card depicts a figure sitting inside a vehicle that is being driven by two black and white sphinxes. The whole card has a bit of a celestial influence; the figure sits underneath a blue canopy adorned by white stars. On his shoulders, he carries the sign of the crescent moon, representing the spiritual influence under which he is guided. On his head sits a crown, meaning that he is enlightened, and that his will is pure. Emblazoned on his chest is a square, denoting the element of earth, of the material world, which grounds him and his actions.\n' +
      '\n' +
      'The sphinxes are colored in black and white, a symbol of opposing forces that the charioteer must learn to control. Here they are calm, but they frequently get into scuffles as they seem to want to move in different directions. His task is to guide these sphinxes towards a destination, one that is marked by the cosmic forces that he represents.\n' +
      '\n' +
      'The Chariot is linked to the Cancer zodiac sign.',
    keywordsGeneralUpright: [
      'success',
      'ambition',
      'determination',
      'willpower',
      'control',
      'self-discipline',
      'focus'
    ],
    keywordsGeneralReversed: [
      'forceful',
      'no direction',
      'no control',
      'powerless',
      'aggression',
      'obstacles'
    ],
    keywordsLoveUpright: [ 'taking action on love', 'taking control of love life' ],
    keywordsLoveReversed: [ 'obsession with finding love', 'forcefulness in love' ],
    keywordsCareerUpright: [ 'strong ambitions', 'motivation and control at work' ],
    keywordsCareerReversed: [ 'lack of ambition', 'too aggressive in career goals' ],
    meaningUpright: "The Chariot tarot card is all about overcoming challenges and gaining victory through maintaining control of your surroundings. This perfect control and confidence allows the charioteer to emerge victorious in any situation. The use of strength and willpower are critical in ensuring that you overcome the obstacles that lie in your path. The Chariot's message comes to make you stronger as you strive to achieve your goals.The key message that he brings to you is that you must maintain focus, confidence, and determination through a process that will be full of winding turns and detours. If you have a plan or a project that you seem not to be sure about, the Chariot shows that you should pursue the plan with a structured and ordered approach. Your boldness will ensure that you achieve all that you should in this goal.\n" +
      '\n' +
      "In the Chariot's quest for his goal, he may display some behavior that he has never seen within himself before - competition and a desire to succeed has perhaps brought out a more aggressive part of his personality. Aggression is a natural part of human nature, and the Chariot reminds you that it can also be used to help you take charge of your situation, but also must be reined in so that it does not hinder your way forward. ",
    meaningReversed: "The reversed Chariot's appearance in a reading can help you become aware of both your aggression, and your lack of willpower. It may either be saying that you are lacking in focus, motivation or direction, or that you are being warped by your obsession with your goals. In the former case, let the Chariot be a reminder that you can emerge victorious as long as you can gather the courage to do so. In the latter, your impulses may be another factor that you must rein in. To see the Chariot in reverse may suggest that you need to come to terms with the fact that you cannot always be in control.\n" +
      '\n' +
      'The Chariot reversal meaning can also be an indication of lack of control and direction over your life. You are at the mercy of the opposing forces and the obstacles, and cannot seem to muster the strength to take over. You are taking everything lying down, and life is dragging in any direction that it pleases. It should serve as a wakeup call and reminder that you will need to tighten some loose ends and take charge of your destiny.',
    meaningLoveUpright: 'Now is the time to take the wheel, and make sure you have a clear understanding of what you’re looking for in love and romance. Once you know your destination, the Chariot tarot love meaning urges you to take action. When you take control of your love life, you are very likely to see rewards. Confidence, courage and drive will lead to success.\n' +
      '\n' +
      'As you move towards your goals, the Chariot tarot love meaning however can also indicate the need to balance two urges, represented by the two horses in the card. They may pull you in different directions, but steering a clear path ahead means reining each one in so that you stay on the right path. This card can sometimes bring questions of whether the choices that you have made so far are balanced; is your relationship suffering because of long hours at work? Are you so focused on your relationship that you’ve sacrificed too much of your individuality for it? The Chariot asks us to take our lives back into our own hands again, and steer with determination.',
    meaningLoveReversed: 'When reversed, the Chariot tarot love meaning can signal an overwhelming drive to find love, so much so that other goals and aspirations may have been forgotten. Sometimes, one has to remember that in life, we cannot control everything around us, and no matter what we do, we can’t make the perfect person appear to us. Showing up everyday with hope and enthusiasm is important, but so is patience. Let love find you. A reversed Chariot in love can also signal that things may be out of balance, and you may need to work to correct them again. Make sure that your work, love, family and friendships are not suffering because you are overextending in one or another. This may be at the root of disagreements with your partner.',
    meaningCareerUpright: 'Your ambition will take you far, when you have the Chariot in a career tarot reading. With a clear understanding of what you want for your career, you know your destination, and you can be very focused on getting there. You’re likely to feel very motivated at work, giving you the discipline, drive and self-control you need to succeed. If you’re looking to change roles, or get a more senior position at your current workplace, this card signals that all you need to do is go for it. When it comes to your work environment, remain clear of distractions; this can include office politics or rivals; make sure you remain focused on what you need to do. ',
    meaningCareerReversed: 'Reversed, the Chariot can signal either a lack of ambition, focus or drive, or alternatively, too much of it. Ultimately, this card brings up questions about how forceful or aggressive you are when pursuing your goals. Are you someone that waits around passively for things you want to happen, hoping that they’ll fall in your lap? Or are you so forceful, that you are inconsiderate of others in your pursuit of success? Both approaches can bring you trouble. Being aggressive to the point of hostility can backfire on you, while being so passive can never bring you the kind of happiness you desire. Are you okay with either of these options? What does a healthy middle ground look like? ',
    index: 7
  },
  {
    name: 'The Lovers',
    description: "In the Lovers card, the man and the woman in the image are being protected and blessed by an angel above. The couple seems secure and happy in their home, which appears to be the Garden of Eden. The fruit tree with the snake behind the woman is a reference to that story, which tells of humanity's fall into temptation and into the realm of flesh and sensuality. The angel depicted here is Raphael, the angel of air - who is of the same element of the zodiac sign that governs this card: Gemini. Air is associated with mental activity, and communication in particular, which is the foundation for healthy relationships. His blessing seems to give this card a sense of balance and harmony, the symbolization of union in a grand and cosmic sense between two opposing forces. ",
    keywordsGeneralUpright: [
      'love',
      'unions',
      'partnerships',
      'relationships',
      'choices',
      'romance',
      'balance',
      'unity'
    ],
    keywordsGeneralReversed: [
      'disharmony',
      'imbalance',
      'conflict',
      'detachment',
      'bad choices',
      'indecision'
    ],
    keywordsLoveUpright: [
      'balanced',
      'loving',
      'supportive relationship',
      'choices about love'
    ],
    keywordsLoveReversed: [
      'cold',
      'detached partner',
      'too many suitors',
      'imbalance in relationship'
    ],
    keywordsCareerUpright: [
      'business partnership',
      'romance at work',
      'choices about career'
    ],
    keywordsCareerReversed: [
      'conflicts between colleagues',
      'romance at work leading to trouble'
    ],
    meaningUpright: 'The primary meaning within the Lovers is harmony, attractiveness, and perfection in a relationship. The trust and the unity that the lovers have gives each of them confidence and strength, empowering the other. The bond that they have created is very strong, and it can indicate that the two are joined in marriage, and other close and intimate relationships.\n' +
      '\n' +
      'Another meaning behind the lovers card is the concept of choice - a choice between things that are opposing and mutually exclusive. This could be a dilemma that you need to think about carefully and make the best decision for your situation. A more personal Lovers meaning that can apply to individuals is the development of your own personal belief systems, regardless of what are the societal norms. We see this as a development from the Hierophant, who made decrees and passed on his knowledge through a standardized system. This is one of the times when you figure out what you are going to stand for, and what your philosophy in life will truly be. You must start making up your mind about what you find important and unimportant in your life. You should be as true to yourself as you can be, so you will be genuine and authentic to the people who are around you.',
    meaningReversed: 'The Lovers reversed can point to both inner and outer conflicts that you are dealing with. The disharmony can make daily life difficult and could be putting pressure on your relationships. You should take time to think about what you are punishing yourself for, so you can fix them or let them go. At this time, you should also think about your personal values and belief system to make sure that they are aligned with what you want from your life.\n' +
      '\n' +
      'A break in communication could be another possible interpretation. The foundation for your relationships may be cut off, creating an imbalance between you and your partner or loved ones. The unity normally present within the card has become lopsided. \n' +
      '\n' +
      'The Lovers reversed can also indicate that you have been avoiding responsibility for your actions. You could have made a decision that was based on your desire for immediate gratification but are now blaming others for the consequences that are catching up to you. So, you need to make amends or let go of the past and make better decisions in the future.',
    meaningLoveUpright: 'When it comes to love and relationships, the Lovers card can be a welcome sight to any seeker. The Lovers tarot card signals a wonderful cohesiveness and balance of forces, indicating complimentary energies. This card represents a pair that works well together. On the other hand, because this card also symbolizes choice, and the choice of commitment, it also raises questions of how committed you are to love. This doesn’t have to refer exclusively to another person, but can also indicate a choice between love or work, love or family, love or friendship, or even sometimes love and your entire lifestyle. The idea here is that there may be a sacrifice that you must make in order to have this love. In some ways, all commitment is a sacrifice, but one made for the right person can help you grow as an individual. The choices and sacrifices that need to be made can apply to both you, a potential or existing partner.',
    meaningLoveReversed: 'The reversed Lovers in a relationship or romance tarot reading can suggest there is a coldness within your relationship. What was in balance is no longer working. Some issue likely stands in the way of your relationship, and must be resolved to once again form a closer bond.\n' +
      '\n' +
      'Sometimes, a fear of commitment may also be indicated. This may be a time when you have many suitors, or your dating life may be very active. While this may be fun at first, you may be feeling that there are too many choices, or too many possibilities that you have to give up in order to develop a partnership. This will likely require some introspection on your part; make sure you are honest with yourself about your fears as well as your desires.',
    meaningCareerUpright: 'Sometimes, the Lovers can signal a business partnership, or a relationship with a colleague that is harmonious and beneficial to both parties. The Lovers card, contrary to popular belief, can also symbolize partnerships of a platonic kind, though at times, this can also signal a romantic relationship that can blossom. If this does happen, make sure you understand the kinds of risk that you open yourself up to, and make a decision both with your head as well as your heart. The Lovers tarot card can also suggest that there are big decisions that you need to make when it comes to your future career. You may be at a crossroads, or shifting from one path to another, or you may need to make choices between your work and other aspects of your life.',
    meaningCareerReversed: 'You may have conflicts between your colleagues, or a business partner when the Lovers card is reversed. You may need to have long discussions in order to agree to a decision that everyone can accept. Or there may be one person that is doing all the work, or has to carry their teammate who has lost all motivation. Both colleagues may be dragged down because of one person’s inability to put in their fair share of work. At times, this card does indicate a romantic relationship started at your workplace, but reversed, this can spell trouble for you. There are likely to be consequences that you did not foresee should you continue down this path. ',
    index: 6
  },
  {
    name: 'The Hierophant',
    description: 'The card depicts a religious figure that sits in a rather formal environment characteristic for a church. He is wearing three elaborate vestments which are designated to represent the three different worlds. His right hand is properly raised in an act of benediction, a sign of blessing – it’s the same hand that the Magician has raised. In his other hand, he carries a triple cross, which is associated traditionally with the pope. Each of the horizontal bars in the cross are thought to represent the Father, the Son and the Holy Ghost. Beneath him, two acolytes are seated, representing the transfer of sacred knowledge within institutions. Through these acolytes, the card also comes to represent following the path to knowledge and education.\n' +
      '\n' +
      'This card is also known as the High Priest in certain decks - as well as the Pope. He is acting as the masculine counterpart of another card which is known as the High Priestess. This card is ruled by Taurus. ',
    keywordsGeneralUpright: [
      'tradition',
      'social groups',
      'conventionality',
      'conformity',
      'education',
      'knowledge',
      'beliefs'
    ],
    keywordsGeneralReversed: [
      'rebellion',
      'unconventionality',
      'non-conformity',
      'new methods',
      'ignorance'
    ],
    keywordsLoveUpright: [
      'safe',
      'traditional partners',
      'avoiding taboo',
      'spiritual love'
    ],
    keywordsLoveReversed: [ 'stale relationship', 'values not aligned', 'breaking taboo' ],
    keywordsCareerUpright: [ 'success in work groups', 'education', 'teamwork', 'mentor' ],
    keywordsCareerReversed: [
      'bureaucracy',
      'stifling',
      'confined workplace',
      'peer pressure'
    ],
    meaningUpright: 'To see the Hierophant in a reading is to embrace the conventional, for it suggests that you have a certain desire to actually follow a process which has been well established. It also suggests that you want to stay within certain conventional bounds of what could be considered an orthodox approach. So, instead of being innovative, you will be adapting to certain beliefs and systems which are already put in place and are existing. \n' +
      '\n' +
      'The Hierophant card suggests that it’s better for you to follow social structures which are established and have their own traditions. You might be involved in certain ceremonies, rituals or other religious trappings, for instance. When it comes to tarot readings, this particular card is most commonly representative of institutions as well as their core values. This is a sign that shows that you need to conform to the already existing set of rules and situations which are fixed already.',
    meaningReversed: 'When you see the Hierophant in reverse, it may mean that you are feeling particularly restricted and even constrained from too many structures and rules. As a result, you have lost quite a lot of control as well as flexibility in your life. You have a particularly strong will and desire to go ahead and regain control as well as to break free from the shackles of convention. You are tempted to try unorthodox approaches or to function in a way which defies social ties and norms. The Hierophant reversal meaning is mostly about questioning certain traditions and making sure that whatever it is that you do is the right thing for you in this certain moment.',
    meaningLoveUpright: `When it comes to relationship tarot readings, the Hierophant's upright love meaning can point to the effects of conventional religion on love and choosing partners. You could be drawn to partners that are safe, traditional, and respected by your community, and avoid partners that are considered "taboo". The Hierophant love meaning in tarot can also represent the more spiritual aspects of love, and a reminder that our partners should be treated morally, and lovingly. Sometimes, this card can also indicate marriage.\n` +
      '\n' +
      'Relationships affected by the Hierophant card are usually traditional, conventional and socially approved. Partners are likely to share a system of beliefs.',
    meaningLoveReversed: "A reversed Hierophant can indicate that your relationship may have become rather stale or boring. You may have entered the relationship since it seemed practical, but without injecting some extra excitement, it can feel dull. When it comes to shared values and creating a future together, the reversed Hierophant love meaning can indicate that your views may not align too well with your own. This doesn't have to be a dealbreaker, but may require some compromise.\n" +
      '\n' +
      'Generally, this card also signals that not all the advice you may receive about your romantic relationships may be helpful for you at this time. You may be better off thinking for yourself what works, instead of relying on someone else to show you what is right for your love life.',
    meaningCareerUpright: 'With the Hierophant, you’ll find success from working with others right now. This can sometimes mean also choosing to not rock the boat, and staying on the tried and true path. With so many variables when it comes to work, it may be better to stay safe for now. This card can also signal that group cohesion rather than individuality can be more important at the moment. Sometimes, the Hierophant can also signify a more senior mentor that can be a helpful aid in you progressing through your career. The card is also representative of education, meaning that a time of learning, whether through a school or vocational training, can be helpful for you.',
    meaningCareerReversed: 'Your creativity, achievement or freedom at your workplace can feel stifled by bureaucracy, processes, or rules right now. You may feel restricted and confined. If you had the options, you may have been able to solve many of your organization’s problems, but they may be stubborn to keep things done “their way”. Sometimes this can mean in order to get things done, you would have to engage in chumming up to your colleagues, or even your boss. There may be a lot of pressure to follow the organization’s decisions even when you have a differing opinion. Weigh the risks of going your own way; can you stay true to your own opinions where you are currently?',
    index: 5
  },
  {
    name: 'The Emperor',
    description: 'In the Emperor tarot card, a stoic ruler figure can be seen on his throne, which is adorned with the heads of four rams, representing his astrological sign - Aries. In one hand, he carries a scepter, representing his reign and his right to rule, and in the other an orb, a symbol of the kingdom that he watches over. The long beard of the emperor represents his vast experience; over time he has learned much about what it takes to rule, to establish power, authority and complete order for the benefit of his people.\n' +
      '\n' +
      'Behind him, the barren mountains shows his determination, his ambition for greater heights and his leadership capability. Contrast this with his complement, the Empress, whose flowing fields are filled with nurturing kindness. The Emperor instead rules with grit, strength and force.',
    keywordsGeneralUpright: [
      'stability',
      'structure',
      'protection',
      'authority',
      'control',
      'practicality',
      'focus',
      'discipline'
    ],
    keywordsGeneralReversed: [
      'tyrant',
      'domineering',
      'rigid',
      'stubborn',
      'lack of discipline',
      'recklessness'
    ],
    keywordsLoveUpright: [
      'traditional relationship',
      'use logic in love',
      'unexpressed emotions'
    ],
    keywordsLoveReversed: [ 'power struggle', 'competitiveness', 'overbearing partner' ],
    keywordsCareerUpright: [
      'creating processes',
      'structure',
      'discipline',
      'routine',
      'mentor'
    ],
    keywordsCareerReversed: [ 'low concentration or focus', 'bureaucracy', 'bad boss' ],
    meaningUpright: "It’s all about control when it comes to the Emperor, for this card means authority, regulation, organization and a fatherliness. The Emperor represents a strategic thinker who sets out plans that he must see through. He is a symbol of the masculine principle - the paternal figure in life that gives structure, creates rules and systems, and imparts knowledge. Where the Empress's desire for their kingdom is to create happiness, the emperor desires to foster honor and discipline. He guides with a firm hand, following the calling of the crown above all else. Though he is a ruler, he understands that to reign is also to serve - thus he acts rationally and according to what is for the greater good of the kingdom.\n" +
      '\n' +
      'To see him in a reading presents a chance to grow in terms of the goals that you have set for yourself. It presents a successful future as long as you pursue your goals similar to the fashion that the Emperor does, methodically, and strategically.\n' +
      '\n' +
      'When you see him in a reading, a possible interpretation is that you could be put in charge of something important. It could be a position at work or in any kind of organization or institution that desperately needs order and a clear decisive mind. You may be called to act in the place of the Emperor, using his wisdom to bring clarity to the project.',
    meaningReversed: 'The Emperor reversed is a sign of abused authoritative power. In your social life, it can manifest in the overreach of power from a father figure or a possessive partner. In career readings, it could be coming from a superior. It presents a man who wants to take control of your actions and makes you feel powerless.  It could also be that you are playing the part of a weak ruler, hatching a plan to avoid the tasks that come with having responsibility. Perhaps you aspire for a career that is more flexible than one that is governed by strict rules.\n' +
      '\n' +
      'Lack of self-control and inability to handle situations can be represented by the Emperor on a personal level. When he is reversed, the structures, rules and systems that he creates are no longer working. His desire to inspire higher principles in his kingdom have turned to ruthlessness, tyranny and rigidity. He seeks to dominate, forgetting his call from the crown to do what is best for his people, fearing only for his loss of control and thus creating suffering.',
    meaningLoveUpright: 'Although the Emperor is a very serious man, without any real sense of romance, its appearance in a love tarot reading can still be beneficial. The Emperor tarot love meaning asks us to bring common sense, structure, discipline and logic to relationships and romance. Relationships around this tarot card may be rather traditional, and perhaps stifling if not handled too carefully.\n' +
      '\n' +
      'As a person, the Emperor represents someone older and well-established, that may also have a hard time expressing their feelings. Sometimes, this card however, can also symbolize a person driven by ego, who is domineering and bullying, and unable to empathize with others.',
    meaningLoveReversed: 'The reversed Emperor tarot love meaning can signal some kind of power struggle or a fight for dominance when it comes to love and relationships. Instead of coming together with your different ideas, there may be competitiveness and a desire to just be right.\n' +
      '\n' +
      "This card can also signal an overbearing partner, whether it's you or your other half. Be careful that you don't give up too much of your personal power, or repress who you are in order to be in this relationship. Alternatively, this card can also signal difficulty emotionally connecting in your relationship or potential relationships.",
    meaningCareerUpright: 'Your career may be flourishing due to your hard work, concentration and organized approach. The Emperor calls on you to be disciplined, efficient and persistent when it comes to getting what you want out of your job, or job search. If your office, or your work process is a bit chaotic or frustrating right now, it may be helpful for you to step up and introduce new methodologies or structures that can help you and your teammates collaborate more efficiently. This card can also point to having a more senior colleague or boss that can provide you with support and advice in your career. ',
    meaningCareerReversed: 'Without focus or discipline, your work may start to falter. If you’ve been lacking these qualities in the workplace, you may notice that it is taking a toll on your projects. Sometimes, this card can also suggest rigidity and bureaucracy in your work environment. This may stifle your sense of creativity and motivation, since the processes needed to do anything have been tedious and frustrating. At worst, the reversed Emperor can point towards a senior employee or boss that rules the workplace like a tyrant. Should this be your situation, it may be better to start looking for employment elsewhere. ',
    index: 4
  },
  {
    name: 'The Empress',
    description: 'The Empress depicts a woman sitting on a throne. From the abundant nature that surrounds her, we can assume that this woman represents the Earth Mother archetype, a goddess of fertility. Her world is ruled by venus which means that there is complete love, harmony, fertility and luxury by the grace of this goddess. The woman herself has blonde hair crowned with stars, signaling her divine connection with the mystical realm. She is dressed in a pomegranate-patterned robe that represents fertility, and she is seated on cushions embroidered with a venus sign. She is surrounded by an enchanting green forest with a river streaming through it. The Empress brings abundance and blessings in the readings of those she meets.',
    keywordsGeneralUpright: [
      'divine feminine',
      'sensuality',
      'fertility',
      'nurturing',
      'creativity',
      'beauty',
      'abundance',
      'nature'
    ],
    keywordsGeneralReversed: [
      'insecurity',
      'overbearing',
      'negligence',
      'smothering',
      'lack of growth',
      'lack of progress'
    ],
    keywordsLoveUpright: [
      'nurturing',
      'supportive lover',
      'sensual committed relationship'
    ],
    keywordsLoveReversed: [
      'lack of self worth',
      'jealous',
      'clingy lover',
      'lack of progress in love'
    ],
    keywordsCareerUpright: [
      'nurturing colleagues',
      'freshening up office',
      'creative period at work'
    ],
    keywordsCareerReversed: [ 'feeling insecure at work', 'not growing skills', 'stale job' ],
    meaningUpright: 'The Empress shows us how deeply we are embedded to our femininity. Femininity could be associated with fertility, expression, creativity and nurturing among many other aspects. It therefore calls you to connect with beauty and bring happiness to your life. Understand yourself and get in touch with your sensuality so that you can attract life circumstances to bring happiness and joy. She is a signal that be kind to yourself, to take care of yourself.\n' +
      '\n' +
      'The Empress is also a strong indication of pregnancy and motherhood. You can look for other cards to confirm if this is truly pregnancy, or rather just an indication of a motherly, nurturing and caring attitude. The Empress card could also mean the birth of a new idea, business or project on your life. Owing to the good fortune that surrounds this card, you can be sure that such situations and projects would end successfully in your life. Discover and bring forth those ideas that have been clinging to you and make sure that you devote yourself towards accomplishing them. This card is a sign that they are going to be successful, and well taken care of. The Empress, as the archetype of the mother earth, also encourages you to spend time interacting with nature, the mother of all of us.',
    meaningReversed: "The Empress reversed indicates that you have lost too much of your own willpower and strength because you have started placing too much effort and concern to other people’s affairs. While the Empress's nature is of showering her loved ones with attention and care, this can sometimes go overboard. You might be neglecting your own needs, or even smothering the ones you love with your well-intentioned actions. In a role reversal, perhaps a reversed Empress is finding her way into your life; it could also mean that you are relying on others to take care of you, and make decisions for you. You need to work towards removing this influence on your life, and build confidence in your own actions. Always try as much as you can to ensure that you solve matters on your own.",
    meaningLoveUpright: 'The Empress tarot love meaning stems from the element of earth. The person represented by this card can be loving, nurturing and caring, as has financial security or appreciative of beautiful, comforting things. Sometimes, the Empress can point to love and work coming together, either with a coworker, or perhaps a new business venture.\n' +
      '\n' +
      'When it comes to relationships, this card also heralds a stable, serious and committed relationship. Because the card also represents motherhood, sometimes it can also signal marriage or pregnancy, or at least a new family, in whatever form that means for you.',
    meaningLoveReversed: "The reversed Empress love tarot meaning can represent a partner is too smothering, controlling or alternatively, unable to express their feelings. The card can also signal that one's self-worth may need a boost. Without feeling worthy of being loved, it doesn't matter who you are with, you may have difficulties maintaining that relationship.\n" +
      '\n' +
      "If you're in a relationship, the Empress in a love tarot meaning can be encouragement to spend some quality time together, and care for eachother. Give yourself a treat by having a date at a restaurant, or a walk holding hands. These moments will bring you two closer together.",
    meaningCareerUpright: 'Your career right now may be enjoying a boost right now. You may be more creative and passionate than usual, and putting all your ideas to work in your projects. Since the Empress is related to nourishment and nurturing, it may also suggest that you’re feeling particularly nurturing and generous when it comes to your workplace as well. You may be working on making a more harmonious and welcoming office, whether that means being supportive of coworkers, or putting a new coat of paint at your home office. Having the environment to do your best can certainly give you even more momentum. Sometimes, this card can also point to another person in your workplace that has these qualities. ',
    meaningCareerReversed: 'Your career may be feeling stale, tedious and unfulfilling right now. It may feel that you’re making little progress when it comes to developing your skills and abilities. The work is monotonous, and perhaps you’ve already mastered what you can do in this position. You may feel that others don’t appreciate the work you’re doing, further adding to your frustration. At times, this card also can point to a feeling of being insecure when it comes to your career. This may also be causing the other problems you’re experiencing. It’s important to take the time now and sort out which of these are problems that require an external change, like switching jobs, versus an internal one, like developing better confidence and communication skills.',
    index: 3
  },
  {
    name: 'The High Priestess',
    description: "You've most likely encountered the High Priestess before, but in other forms - she can be seen in the archetypes of Persephone, Artemis, Isis and many more. When you encounter her, you will see her sitting on a cubic stone between the two pillars at Solomon’s Temple, Jachin, and Boaz. Jachin (right) is generally referred to as the Pillar of Establishment and Boaz (left) is the Pillar of Strength. The pillars also depict the duality of nature; masculine and feminine, good and evil, negative and positive.\n" +
      '\n' +
      "The High Priestess's location between the two suggests that it is her responsibility to serve as a mediator between the depths of the reality. She is the third pillar - the path between. She believes that both pillars are equal and there is knowledge to be learned in both worlds. You will also notice that she wears the crown of Isis which can mean that she is a believer of magic. The high priestess wearing of the solar cross denotes that she is connected to the season of the earth and the earth itself. The crescent moon at her feet is seen also in many depictions of the Virgin Mary, and means that she has a complete grasp over her emotion and the pomegranates refer to the ambition of the priestess.",
    keywordsGeneralUpright: [
      'unconscious',
      'intuition',
      'mystery',
      'spirituality',
      'higher power',
      'inner voice'
    ],
    keywordsGeneralReversed: [
      'repressed intuition',
      'hidden motives',
      'superficiality',
      'confusion',
      'cognitive dissonance'
    ],
    keywordsLoveUpright: [
      'remain patient in love',
      'calm exterior with inner passion',
      'intimacy'
    ],
    keywordsLoveReversed: [ 'ignoring intuition in romance', 'hiding true self with lover' ],
    keywordsCareerUpright: [
      'education',
      'creative inspiration',
      'guide',
      'mentor',
      'use instincts'
    ],
    keywordsCareerReversed: [
      'feeling isolated',
      'lacking project information',
      'rejecting intuition'
    ],
    meaningUpright: 'The meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated. \n' +
      '\n' +
      'The card itself shows a night-time scene, meaning that the world in which she protects and guards is one that may at first seem frightening, but has the potential to lead us into the growth of the self. When she appears in a reading, she is calling to you to listen to her message, and follow her into your own depths. There is searching within yourself to be done for the answers that you seek. The answers to the questions you have are within, not without.',
    meaningReversed: 'When it comes to the High Priestess reversed, it can mean that you are finding it difficult to listen to your intuition. It is time for you to meditate and try new approach, for at this moment, the rational approach will not work. Something has been telling you to follow your gut, but you may be ignoring the call. There is a lot of confusion around you, and your actions may feel contrary to what you know is right. You must never be afraid to ask questions of yourself that may illuminate a new path forward for you, one that is more authentic to your inner self and your individual values.',
    meaningLoveUpright: "The High Priestess in a love tarot reading can signal almost imperceptible and unconscious changes in one's emotional state. A calm surface can hide intense emotions, and even seemingly simple dates can turn into raging passions. The High Priestess tarot love meaning suggests that one needs patience, and trust for your intuition. Be honest with others and yourself, and let what is hidden come to the surface.\n" +
      '\n' +
      'In a relationship, the High Priestess shows increasing intimacy and openness. In a love tarot reading, this card signals that honesty is essential to making your relationship as strong as it can be.',
    meaningLoveReversed: 'The High Priestess is the guardian of your intuition, indicating that it can be a powerful indicator that you will need to trust your feelings when it comes to love and romance. Difficulties can develop when you ignore your intuition and follow only your conscious mind. The High Priestess love meaning can also signal that you must be careful to be truly honest. Avoid taking action or saying words to simply please your lover. This leads to nothing but resentment.',
    meaningCareerUpright: 'When it comes to your career, the High Priestess may signal a period of education or higher learning. You may be returning to school for training. If you’re in a creative field, this card also can suggest new inspiration coming into your work. When making big choices about your future career or projects, the High Priestess also suggests relying on your gut instincts. There’s likely a lot of information there that will aid you. At times, this card can also signal the appearance of a mentor or guide that can help you progress further in your work.',
    meaningCareerReversed: 'You may not have all the information when it comes to your work situation right now. Have people kept you in the dark? Because of this, you can feel alone and perhaps out of touch with your coworkers. It may also be that when it comes to making career decisions, you’re not listening to your intuition. Are you choosing to trust a business associate despite a gut feeling that they don’t have the best intentions for you? Are you staying in a job you despise despite your intuition telling you that this one isn’t meant for you? This card can also suggest a colleague who has hidden agendas; be wary of others. A warm demeanor may hide danger.',
    index: 2
  },
  {
    name: 'The Magician',
    description: 'The Magician is one tarot card that is filled with symbolism. The central figure depicts someone with one hand pointed to the sky, while the other hand points to the ground, as if to say "as above, so below". This is a rather complicated phrase, but its summarization is that earth reflects heaven, the outer world reflects within, the microcosm reflects the macrocosm, earth reflects God. It can also be interpreted here that the magician symbolizes the ability to act as a go-between between the world above and the contemporary, human world. \n' +
      '\n' +
      'On his table, the magician also wields all the suits of the tarot. This symbolizes the four elements being connected by this magician - the four elements being earth, water, air, and fire. The infinity sign on his head indicates the infinite possibilities of creation with the will.',
    keywordsGeneralUpright: [
      'willpower',
      'desire',
      'being resourceful,',
      'skill',
      'ability',
      'concentration',
      'manifestation'
    ],
    keywordsGeneralReversed: [
      'manipulation',
      'cunning',
      'trickery',
      'wasted talent',
      'illusion',
      'deception'
    ],
    keywordsLoveUpright: [ 'creating opportunities for love', 'being proactive in love' ],
    keywordsLoveReversed: [
      'romantic illusion',
      'romantic trickery',
      'low willpower for love'
    ],
    keywordsCareerUpright: [ 'harnessing career opportunities', 'determination and drive' ],
    keywordsCareerReversed: [
      'wasted talent',
      'unwillingness to take chances',
      'workplace deception'
    ],
    meaningUpright: 'The Magician is the representation of pure willpower. With the power of the elements and the suits, he takes the potential innate in the fool and molds it into being with the power of desire. He is the connecting force between heaven and earth, for he understands the meaning behind the words "as above so below" - that mind and world are only reflections of one another. Remember that you are powerful, create your inner world, and the outer will follow.\n' +
      '\n' +
      "When you get the Magician in your reading, it might mean that it's time to tap into your full potential without hesitation. It might be in your new job, new business venture, a new love or something else. It shows that the time to take action is now and any signs of holding back would mean missing the opportunity of becoming the best version of yourself. Certain choices will have to be made and these can bring great changes to come. Harness some of the Magician's power to make the world that you desire most.",
    meaningReversed: 'When you obtain the Magician reversed, it might mean its time for you to implement some changes. While right side up, the Magician represents true power, the reversed Magician is a master of illusion. The magic that he performs is one of deception and trickery. You may be lured in by the showmanship of his arts, but behind that there may be an intention to manipulate for selfish gain. Getting this card might mean that there is someone who pretends to have your best interests at hand when the opposite is true. Consider whether this reversed the magician is in your circle, or perhaps might also represent your current state of emotions. It may mean you may become obsessed with power and that might lead to wrong, reckless decisions that will lead to your eventual downfall. ',
    meaningLoveUpright: 'As with its general meaning, the Magician tarot meaning in love indicates making things manifest. Skill, creativity, desire and determination will bring success in love. Should you be searching for love, the Magician suggests you take action and create opportunities to meet someone who you desire. Because the Magician in tarot also represents resourcefulness and skill, it is also still important to make sure that no deception or illusions are at work. For both singles and couples, the Magician brings excitement and a desire to experiment.',
    meaningLoveReversed: 'In reverse, the Magician tarot meaning in love can signal that not everything may be what it seems. When it comes to new relationships, you may want to make sure you truly know your new lover. Even if he or she seems perfect, this could be an illusion or performance. Alternatively, the reversed Magician in love can indicate that your low confidence or a lack of willpower, or an inability to manifest your relationships, creating insecurity when it comes to romance and love.',
    meaningCareerUpright: 'There are likely to be opportunities in your midst, and you may be able to harness them if you take decisive action. The Magician is the card of manifestation, meaning should you have the desire and commitment to pursue whatever it is you want in your career, you’re likely to find success. Look behind any successful person, and you’ll likely find intense willpower and drive; this is the root of all ambition. The same goes if you’re looking to start a business; harness that drive, and keep it motivated to manifest your dream career. Sometimes, if this card represents another person, such as a colleague or business partner, you may want to approach with caution, as they may not be everything they appear to be.',
    meaningCareerReversed: 'Are you really putting all of your talents to use right now? Are there any skills that your current career trajectory is ignoring? There are likely lots of opportunities for you to advance, if you were to really use your true potential. You may already feel this, but perhaps are too afraid to take the plunge, as it can be a risky move. You’ll need to take a closer look at what the real risks are, and understand whether your fears are truly grounded in reality, or whether they stem from a different source. Sometimes this card can also indicate that the people in your workplace may not be completely honest, or may have hidden agendas. If your gut instinct is telling you this, trust it; be wary about how much you share around them. ',
    index: 1
  },
  {
    name: 'The Fool',
    description: "The Fool depicts a youth walking joyfully into the world. He is taking his first steps, and he is exuberant, joyful, excited. He carries nothing with him except a small sack, caring nothing for the possible dangers that lie in his path. Indeed, he is soon to encounter the first of these possible dangers, for if he takes just a step more, he he topple over the cliff that he is reaching. But this doesn't seem to concern him - we are unsure whether he is just naive or simply unaware. The dog at his heels barks at him in warning, and if he does not become more aware of his surroundings soon, he may never see all the adventures that he dreams of encountering.",
    keywordsGeneralUpright: [
      'beginnings',
      'freedom',
      'innocence',
      'originality',
      'adventure',
      'idealism',
      'spontaneity'
    ],
    keywordsGeneralReversed: [
      'reckless',
      'careless',
      'distracted',
      'naive',
      'foolish',
      'gullible',
      'stale',
      'dull'
    ],
    keywordsLoveUpright: [ 'new relationship', 'fun light romance' ],
    keywordsLoveReversed: [ 'lack of commitment', 'risky relationship' ],
    keywordsCareerUpright: [ 'new job', 'new business', 'breath of fresh air at work' ],
    keywordsCareerReversed: [ 'stale and boring job', 'reckless actions at work' ],
    meaningUpright: 'The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet.\n' +
      '\n' +
      'To see The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed. He leads a simple life, having no worries, and does not seem troubled by the fact that he cannot tell what he will encounter ahead.\n' +
      '\n' +
      'To meet him in a reading can also be seen as a call to the risk-taking part of your own character. He inspires courage, for he understands that every day is a chance to open up new areas in your life, and with that comes a mixture of anticipation, wonder, awe and curiosity. The Fool is there to show that you can never really tell what lies ahead, and you can only greet it with joy.',
    meaningReversed: "When you land on the reversed Fool in your reading, you can generally find his more negative characteristics being on display. It can mean that you are literally acting like a fool by disregarding the repercussions of your actions. Like the youth depicted in the card, you don't see how dangerous of a position you find yourself in. A reversed Fool card can show that you are living in the moment and not planning for the future. The reversed Fool meaning serves as caution that you should be more aware so as not to be taken advantage of. Like the dog in the Rider Waite version, this card is here to alert you on anything that may sound too good to be true.",
    meaningLoveUpright: "When this card shows up in a love tarot reading, get ready to embark on a new adventure. The Fool tarot meaning in love signals that you'll need to experience new things in order to find the romance that you desire. Be willing to take risks, be bold and expand your vision of the world and you may end up finding love in the most unlikely places. Surprises are in store for you. Since the Fool represents the start of new journeys, it's tarot meaning in love can be an indicator of new relationships. As with any new relationship, you may fear rejection, but this card indicates that this should not hold you back. When you open yourself up to the world, even in the face of embarassment or rejection, you may find what you are looking for. In love and relationships, the Fool tells us that we should be confident and have faith that all things will work out well. It tells us that instead of giving up, we keep trying, and look at the world with innocence and wonder. The Fool tarot meaning in love encourages open-eyed innocence and  positivity.",
    meaningLoveReversed: 'When the Fool is reversed in a love tarot reading, this card can signal that your bright-eyed, trusting nature may need to be tempered with a dose of caution. Especially when with new lovers, make sure that everything is what it seems to be. You may now be looking at love with rose-tinted glasses, and unable to see a clear picture of the relationship.\n' +
      '\n' +
      'The reversed Fool tarot meaning in love can also indicate that you or a lover may be a bit too immature right now to handle truly loving relationship.',
    meaningCareerUpright: 'New beginnings are on their way, when the Fool appears in your career tarot reading. If you’ve been looking to start a new career path, change jobs, get a promotion, or even start your own venture, the Fool can be a welcome card to begin your new journey. Even if no new drastic changes are coming your way or planned, this card can feel like a fresh breath of air into old projects. You can be filled with new energy, and new innovative ideas can be put into action now. What is important now is to be very aware of the opportunities that are there, and have the courage to take them when they appear. ',
    meaningCareerReversed: 'You may have all the energy in the world, and eagerness to do use that energy, however, you may not quite have the insight to do so without any consequences. Try and be more aware about how your actions affect your colleagues right now, and think before you take action. Other times, the reversed Fool can signal that your current job feels stale and boring, and you may be feeling like it’s time for a change. Sometimes, this indicates that you may feel blocked from actually doing so, or that you need to consider these plans very carefully before making that choice. It may be that there are more dangers than you see right now.   ',
    index: 0
  },
  {
    name: 'Seven of Wands',
    description: 'The Seven of Wands has an image of a man who is standing on a tall hill and being challenged by the opponents below. He seems to be defending this position and attacking in retaliation. It is interesting to note that in the Rider-Waite depiction of the Seven of Wands, the man is wearing not matching shoes. This is linked to the symbolism of being on uneven ground or not having a stable footing in life.',
    keywordsGeneralUpright: [
      'protectiveness',
      'standing up for yourself',
      'defending yourself',
      'protecting territory'
    ],
    keywordsGeneralReversed: [
      'giving up',
      'admitting defeat',
      'yielding',
      'lack of self belief',
      'surrender'
    ],
    keywordsLoveUpright: [ 'setting boundaries in relationship', 'fighting for romance' ],
    keywordsLoveReversed: [
      'defensiveness',
      'denial in love',
      'a breakup from external pressure'
    ],
    keywordsCareerUpright: [
      'fighting off competition',
      'defending your position',
      'facing challengers'
    ],
    keywordsCareerReversed: [ 'failure to hold your ground', 'being overcome by competition' ],
    meaningUpright: 'The Seven of Wands has a similar in meaning to the Five of Wands; both cards indicate struggles after the initial fulfillment and satisfaction of an event. The Seven of Wands however is different as it is is about the struggle that you need to go through to maintain your position, rather than to attain it. This is about the difficulties we face to continue to have success. You should be ready for the competition to you defend your title, and to prove yourself. Others are going to desire the same results that you do, so you need to stay ahead of the them.There will be challenges to the success of your project or venture from an outside source. You must remain dedicated to your desires, and with a clear purpose and effort, you will overcome them.\n' +
      '\n' +
      'The overall meaning of the Seven of Wands is to hold your ground, no matter what is challenging your position. You will need to defend this position and take a stand against those who are aiming to take your spot. There are setbacks during this time, but you need to keep fighting for your beliefs and confront those that may threaten or oppose you and your beliefs.',
    meaningReversed: 'The Seven of Wands reversal meaning is that you could be feeling overwhelmed by all the responsibilities and challenges that you are facing. This can make it difficult to see the whole picture. You can also feel that you have to compete and compare yourself to other people, which leaves you feeling vulnerable and inadequate. The Seven of Wands reversal meaning can also reflect your feelings of being criticized and judged constantly by others. Your friends and family could be questioning you about your decisions and choices, and you feel overwhelmed by their judgement. Avoiding conflict and backing down is common with the reversed Seven of Wands. This can lead to unhappiness because you run away from activities and relinquish your goals, when you are challenged by anyone. Remember all that you fought for to be here, and think carefully on whether you truly believe that is worth giving up now. Another reading of the Seven of Wands reversed can also be that you are being too aggressive when you are protecting yourself and damaging your relationships by doing so. ',
    meaningLoveUpright: 'You may have to set boundaries when this card comes up in a love tarot reading, even though it may create some uncomfortable situations. If you’re with a partner, you may find yourself in a situation where you must fight for your relationship. There may be objections from other parties; family, other suitors, friends that oppose the two of you being together. You may have to put in a lot of effort to make the partnership last, despite many external things in your environment working against the two of you. Despite all these factors, you may be filled with confidence that this is the right thing to do. Hold on to this feeling, it will help keep you energized when the going gets tough.',
    meaningLoveReversed: 'Too much defensiveness can be working against you. The reversed Seven of Wands tarot love meaning can suggest that the relationship that you are working so hard to defend can indeed be on shaky ground. Others around you may see this clearly; concerned about your well-being. You may instead be brushing off these concerns, and perhaps be in a period of denial. Love may be making it difficult for you to see the truth. Alternatively, even if you two are together for the right reasons, you may find it increasingly more difficult to remain together amongst the external forces that are trying to pull you apart.',
    meaningCareerUpright: 'In general, the upright seven of wands signifies challenges and perseverance. If the seven of wands appears here, these ideas apply to your work life. Though they might sound a bit frightening, this card doesn’t need to be negative. When upright, this card indicates that you are capable of solving (though perhaps caught off guard by) the issues you are about to face. Others may be attacking you, or envious of your position at work. Embrace your inner confidence and proceed without fear. Challenges either to your position or to your morals can be particularly common now. Fortunately, you have the strength to push past any fears or concerns and successfully stand up for both yourself and your beliefs.',
    meaningCareerReversed: 'When the seven of wands appears in a career reading, your attempt to stand your ground may not be working out. This can come from a lack of preparation. You may not be ready to defend your past victories, your principles, or your position. Right now, it is crucial that you protect your job position or business, but you are not willing or ready to do so. People can oftentimes become envious of success, so it is not enough to rest on your laurels. Sometimes, such as now, you may need to be on guard for people attempting to undermine you. Whatever choices you have made recently have left you vulnerable to someone else coming in and stealing the opportunities you tried to build. Be wary.',
    index: 56
  },
  {
    name: 'Four of Wands',
    description: 'The Four of Wands depicts a couple which dances beneath the welcome wreath which is tied between four wands, which are crystal tipped. There is a canopy of flowers on the card which resembles the canopy that is particularly characteristic of the traditional Jewish ceremony. There seems to be a party that is going on, or some kind of welcome committee for the couple in question. You can see from the image that it represents a time which is sprinkled with feelings of fulfillment, satisfaction brought by the actual attainment of a goal.',
    keywordsGeneralUpright: [
      'community',
      'home',
      'celebrations',
      'reunions',
      'parties',
      'gatherings',
      'stability',
      'belonging'
    ],
    keywordsGeneralReversed: [
      'lack of support',
      'instability',
      'feeling unwelcome',
      'transience',
      'lack of roots',
      'home conflict'
    ],
    keywordsLoveUpright: [
      'weddings',
      'engagements',
      'gatherings and public celebrations of love'
    ],
    keywordsLoveReversed: [
      'conflict between family',
      'community and love life',
      'fear of public commitment'
    ],
    keywordsCareerUpright: [
      'feeling supported by colleagues',
      'office parties',
      'bonding with colleagues'
    ],
    keywordsCareerReversed: [ 'workplace conflicts between colleagues', 'office conflicts' ],
    meaningUpright: 'The overall meaning of the Four of Wands is that it heralds celebration as well as a harmonious, happy and relaxed home environment. In terms of numerology, the number four symbolizes stability as well as particularly reliable foundations. These are associated with a period of happiness and balance.The symbolism within the Four of Wands poses that this is the perfect time for you to get together with close people such as friends and family. This could be with or without any special occasion. Oftentimes the card is known to reflect a period of holidays when you are together with your friends and family for an extended period of time. It might also be suggesting for you to invite your closest friends for a great and intimate dinner and share a laugh or two.\n' +
      '\n' +
      'Furthermore, if you have been working on a certain project, this card entails that you will be reaching a particularly important milestone. This is going to provide you with grounds for celebration which is also to be considered. You have managed to complete a proper and paramount phase of that project, and meaning you have every reason to be feeling proud and satisfied, which are amongst the general feelings induced and reflected by the Four of Wands card.',
    meaningReversed: 'If the upright position of the card reflects balance, stability, and harmony, the reversal position of Four of Wands implies that there is a breakdown or complete lack of harmony in your family or in your home. It’s highly likely that there is a lot of tension between the members of your family or other loved ones. If you have completed something that is important to you, you are expecting to share it with those that are closest to you, and to come home to a welcome celebration, but instead, you find a lack of support. This may leave you feeling rather uncertain when it comes to your own relationships as well as the things that you can and cannot depend on.',
    meaningLoveUpright: 'This card is the card of family, of reunions and of festivities. The Four of Wands tarot love meaning can bring about engagements, marriages, or other gatherings that commemorate you and your love. If you’re in a stable relationship built on a strong foundation of trust, support and understanding, your union may be strengthened even more with the support and witness of your family and friends. This kind of love is not just the love between two people, but a love that is supported within the context of a larger community. Should you be single, you may find love within these communities and gatherings.',
    meaningLoveReversed: 'There may be some conflicts occurring when it comes to family and your romantic life at the moment. The Four of Wands tarot love meaning can signal incompatibilities between your larger community of friends and family, and your partner, or the way that you are approaching love and romance. Sometimes, since this card is also the card of deepening your commitments on a more public level, there can be some fear and hesitation about taking these next steps. Change, especially binding oneself with another person, can be wonderful and rewarding, as well as terrifying. These emotions can exist together, but only you will be able to know whether it comes from a deeper place than just cold feet.',
    meaningCareerUpright: 'The upright four of wands is a stable and social card. It, when upright, signifies stable and supportive relationships. This sense of community applies to your work environment when it appears in this position. Possibly, you have made new friends at work or the atmosphere there has been particularly positive lately. There may also be work gatherings such as office parties in the near future aimed at bringing you closer to the people with whom you work. If there are, these events are likely to result in closer bonds between you and your colleagues.',
    meaningCareerReversed: 'When reversed, the convivial nature of the four of wands is subverted. As a result, it might be that, at work, your relationships are under strain or have been harder to form. This difficulty can apply in a general sense to your office’s atmosphere; alternatively, it may be in reference to a specific moment or point of tension at work. For instance, there may be office events approaching, but they will likely not go as planned. Instead of increasing comradery, they might have the opposite effect. If there are no specific concerns in your work setting, it is likely that the card is highlighting the general state of your office. Perhaps the atmosphere at work is harsh or unfriendly. Regardless, expect ruder behaviors from the people you work with and be aware of them in yourself as well.',
    index: 53
  },
  {
    name: 'Ace of Wands',
    description: 'Wands are associated with fire energy, and the Ace of Wands is the core representation of fire within the deck. The card shows a hand that is sticking out of a cloud while holding the wand. When we look at this card, we can see that the hand is reaching out to offer the wand, which is still growing. Some of the leaves from the wand have sprouted, which is meant to represent spiritual and material balance and progress. In the distance is a castle that symbolizes opportunities available in the future.',
    keywordsGeneralUpright: [
      'inspiration',
      'creative spark',
      'new initiative',
      'new passion',
      'enthusiasm',
      'energy'
    ],
    keywordsGeneralReversed: [
      'delays',
      'blocks',
      'lack of passion',
      'lack of energy',
      'hesitancy',
      'creative blocks'
    ],
    keywordsLoveUpright: [
      'excitement and passion in love',
      'flirtation',
      'romance',
      'attraction'
    ],
    keywordsLoveReversed: [
      'short-term passionate love affair',
      'lack of excitement in love'
    ],
    keywordsCareerUpright: [ 'inspired at work', 'creative projects', 'passion for work' ],
    keywordsCareerReversed: [
      'lacking inspiration at work',
      'feeling uncreative',
      'lack of progress'
    ],
    meaningUpright: "Wands symbolize creativity, and the Ace of Wands is the boldest among the cards in the suit. It is not the kind of creativity that you learn from school or as a hobby. It is bravely finding your own voice, it creates a place where you can develop your own vision. In other words, it is associated with willpower, and creativity in the cosmic sense.When you draw the Ace of Wands, it is an indicator that you should just go for it. Take the chance and pursue an idea that you have in mind. Take the first steps to start the creative project. The Ace of Wands calls out to you to follow your instincts. If you think that the project that you've been dreaming of is a good idea, and then just go ahead and do it. \n" +
      '\n' +
      "The Ace of Wands can also perhaps mean that you are waiting for a sign to start a project. To draw this card pushes you to act now, instead of brooding over research and more planning. Take small steps today, and then continue to grow your ideas over time. Action is what helps you grow, and build momentum. Don't remain in the abstract.Another Ace of Wands meaning is the occurrence of a breakthrough moment in your life. It is a time when you are motivated and inspired about a passion project or idea. You are excited about the opportunities that are opening up for you in the near future.",
    meaningReversed: 'The reversed Ace of Wands indicates trials and tribulations that you will face in the near future. You might not have any direction, which leads to being uninspired or unmotivated. At this point of your life, you might not know what you really want to do. You don’t know how to get out of the slump. In the case that you already have a goal, you are not excited to achieve it. When you draw a reversed Ace of Wands, you should consider taking some time off to allow inspiration to come to you. You feel weighed down by your current commitments and responsibilities that you can’t come up with new ideas, or muster the passion to push forward in your projects.The Ace of Wands reversal meaning can also indicate delays with your current projects. You want to finish your tasks, but there are things that get in your way. Or you have an idea but don’t know how to execute it and make it a reality. When this is the case, you should be patient and wait for the right time.',
    meaningLoveUpright: 'The Ace of Wands tarot love meaning signals excitement and passion; things are heating up for you! Your relationship may take on a very sensual character at this moment, and the same holds true of potential romances if you’re single. There may be lots of flirtation and attraction, and even some room for longer lasting relationships should the lust also be accompanied by some kind of spiritual understanding. If you’re committed, and the passion has since faded, now can be the time when it is revived again. There is a good chance for rekindling the flames, and for the two of you to feel more emotionally connected.',
    meaningLoveReversed: 'When reversed, the Ace of Wands tarot love meaning heralds intense passion, but one that may quickly burn out. There can be lots of excitement in the beginning stages, only to fizzle out when commitment is mentioned. Long term romances may not be favored by this card. If you’re in a relationship, this card can suggest that at this moment, your enthusiasm for your each other may not be very high. Sometimes, it’s simply a matter of learning to communicate better, or making sure you dedicate some time for one another. Effort is required to ignite passions once more.',
    meaningCareerUpright: 'If you find the ace of wands here, you are likely in a time of high growth for your career. It is a moment in which your preparation is meeting opportunities. You might also find that your work is particularly inspired right now. You can push past old boundaries and see potential in all experiences. This is a good moment to confront issues that hindered your progress in the past because you are now in a better position to confront them. Your creativity and problem-solving skills are at a high. Use this energy to the best of your abilities.',
    meaningCareerReversed: 'The reversed ace of wands means a lack of inspiration. This deficit can manifest in a variety of ways. You might have a hard time brainstorming right now. If your career requires a lot of creativity, it might seem like you are drained of ideas. When you sit to write even simple letters or papers, you might find yourself staring at a blank page for longer than usual. This lack of creativity makes it a difficult time to start new projects or jobs. This timing is particularly unfortunate because you are also prone to frustration at a lack of progress right now. Try to be patient with both your inspiration and your career path. There are lulls sometimes; this is nothing uncommon or inescapable. Treat yourself with kindness and do things that tend to inspire you when possible.',
    index: 50
  },
  {
    name: 'Ten of Wands',
    description: 'A man is shown carrying a heavy burden of wood, in the form of ten bundled wands, approaching a town which is not too far. This image on the ten of wands indicates a person who has already struggled in life and has succeeded, and he is now carrying the harvests to his final destination. Although he is not near the destination, it shows that he has finished the hardest part of life struggle and he just needs a place to relax and revel in his success. ',
    keywordsGeneralUpright: [
      'burden',
      'responsibility',
      'duty',
      'stress',
      'obligation',
      'burning out',
      'struggles'
    ],
    keywordsGeneralReversed: [
      'failure to delegate',
      'shouldering too much responsibility',
      'collapse',
      'breakdown'
    ],
    keywordsLoveUpright: [
      'heavy burden of love',
      'love creates responsibility',
      'stress creates issues in relationship'
    ],
    keywordsLoveReversed: [
      'failure to share burdens with partner',
      'finding emotional support from partner'
    ],
    keywordsCareerUpright: [
      'being overworked',
      'work burdens being carried alone',
      'needing help from colleagues'
    ],
    keywordsCareerReversed: [
      'relief from work burdens',
      'finding support',
      'delegating tasks',
      'burn out'
    ],
    meaningUpright: 'This card shows that you have already completed the circle of struggle. After spending too many resources and lots of energy looking for success, you have finally overcome the obstacles. The sweat off your brow was worth it - your efforts have finally been rewarded. You may find yourself living in a world of abundance where poverty and suffering have no chance to intervene.Although it sounds marvelous and satisfying, the card depicts a lot of responsibilities on your side. You are now the sole problem solver in your circle of family and friends which could even propel you into another world of challenges. At this point, you are also flooded with responsibilities to maintain your success. The businesses that you have started are flourishing and keeping you on your toes. The main problem is that these issues could overwhelm you if you lose control, which requires you to make sure that you know how to prioritize and solve the relevant ones.\n' +
      '\n' +
      'In the real world, this card expresses how people try to burden themselves with responsibilities after they attain initial success. It is like graduating from college, getting a job and then starting to make it in the real world. More challenges keep coming, you may find yourself looking after you parents, starting a family and at the same time look to others, which may make you feel as though you not yet successful. It becomes a burden because at some point you find out nothing is enough to accomplish all these duties. The general lesson of the card is that people should be moderate, prioritize and understand that they cannot solve everything, some things must be let go, given to others, the burden shared.',
    meaningReversed: 'When the Ten of Wands card is reversed, it indicates that you are truly burdened by circumstances which are not necessary in your life. Look around and see what is bothering you that will not positively impact yourself even if you rectify it. Drop them all and be a free being that can think soberly and do things accurately. Anything that does not add value in your life is not worth your time, so let it go.',
    meaningLoveUpright: 'Love may feel like a heavy burden with the Ten of Wands tarot love meaning. Other aspects of your life, like work or finances, may have weighed on you lately, making it difficult for you to be romantic. Sometimes, the stress may make you feel like your love life is just another burden for you to carry, instead of something that can help you carry your burdens. If you’re attached, don’t be afraid to ask for help. It can ease your lover’s worries, lighten your worries, and can also be a chance for the two of you to become closer together. If you’re single, don’t be afraid to spend some time on your own; everyone needs to focus on themselves before they can focus on finding a partner. Take care of yourself.',
    meaningLoveReversed: 'You and your partner are meant to weather the burdens of life together, but one of you may still find it difficult to be vulnerable. Heavy burdens are not being shared, and that can lead to deterioration of your relationship. Instead of working as team, one person may be hoarding all the responsibilities, perhaps with the best of intentions, believing that it protects the other from stress, or worse, not trusting the other person to be able to help. If this is you, trust your partner; give them the chance to help you. When someone loves you, they want to see you happy, and helping you won’t be a burden, but a pleasure.',
    meaningCareerUpright: 'The ten of wands is a card of burden. This principle can apply easily to your work life. When upright, the ten suggests that you are feeling overworked. It might be that you have too many projects for you to handle on your own. See if it is possible to delegate or share your load with others. Collaboration and delegation are your greatest aids at this time. Do not be afraid to ask for assistance or speak up about an uneven distribution of work. If your workload is not particularly heavy right now, it might be that you find the tasks at hand uncommonly difficult or draining. It is still okay to ask for a hand if you need one.',
    meaningCareerReversed: 'The ten of wands in this context represents an ending of work burdens. There are two ways this relief of pressure could have come about. One way you might have achieved this end was by successfully delegating work. Potentially, your realization that there was simply too much for one individual is being rewarded. Having better spread the bulk of your previous concerns out over a group, they now do not negatively impact any individual too terribly, and you are able to relax a bit. If you failed to delegate responsibility when it was required of you, you likely broke under the pressure of too many demands. Either way, you are no longer overworked and will have a quiet moment to recover.',
    index: 59
  },
  {
    name: 'Nine of Wands',
    description: 'The Nine of Wands shows a weak-looking man holding on to a wand with 8 other upright wands standing behind them. The man looks injured, but he still seems ready to fight another battle, and desires strongly to win. He has a look of hope and determination about him that should help him go through that one last battle. It is a card that shows a mix of challenges, hope and triumph. ',
    keywordsGeneralUpright: [
      'last stand',
      'persistence',
      'grit',
      'resilience',
      'perseverance',
      'close to success',
      'fatigue'
    ],
    keywordsGeneralReversed: [
      'stubbornness',
      'rigidity',
      'defensiveness',
      'refusing compromise',
      'giving up'
    ],
    keywordsLoveUpright: [
      'love requiring hard work',
      'love isn’t easy',
      'self-improvement'
    ],
    keywordsLoveReversed: [
      'relationship failing despite putting in work',
      'one partner putting in work'
    ],
    keywordsCareerUpright: [
      'exhaustion from work',
      'project nearly complete',
      'feeling drained'
    ],
    keywordsCareerReversed: [
      'feeling drained and fatigued at work',
      'struggling at work',
      'nearing burnout'
    ],
    meaningUpright: "The Nine of Wands tarot card is one that symbolizes great hope even when one is faced by many problems that threaten to make them lose their balance. The Nine of Wands symbolizes one's life, which has undergone too many trials but through their determination and will, they were able to overcome them. These won battles are symbolized by the eight upright wands; however, there are still more trials that the person may face. This can be one major trial or challenge that they are supposed to face for them to reach their goals or be successful in their quest. The card is a sign of hope and encouragement that you should face your trials with courage so that you may attain success.\n" +
      '\n' +
      'The Nine of Wands may also mean that a person has been betrayed and has thus become mistrustful towards others. This may be because of something that has happened a number of times, and might on the first glance seem hopeless. But there is also hope and courage here, and the belief that this outlook is about to change. Someone or something may come into their life that will change their whole view of their past struggles. It encourages one to take that risky move because they may be surprised.',
    meaningReversed: 'The Nine of Wands reversed shows a person who may not be a risk taker; they may not want to make a long-term move or commitment since they are afraid that they may not be able to come out of it. They are mistrustful and hence have created a boundary between themselves and others which is turning to be their own personal prison. You may be afraid that you do not have enough resources to face some upcoming challenges, which is why you may be open to running away or avoiding it.However, this is a situation that needs to change since this could be your self-created restriction to prevent you from attaining the new heights you need to grow. It encourages you to be brave, but also be careful not to make careless or hasty decisions that may cost you in future.The Nine of Wands may be an indication of a great personal fear or mentality that could affect you. Hence, it is important that you do something to deal with it before fear consumes you and prevents you from moving onward.',
    meaningLoveUpright: 'You have prepared and strategized, and now are ready to face the challenges that are coming ahead. The Nine of Wands tarot love meaning signals that you recognize that the love you want will require much work, self-improvement, and sacrifice. In fact, this is the nature of all love. Many believe that love is only a feeling, but in reality, it comes from two lovers that are willing to adapt, and work through problems together as a team. It is constant communication and adjustment. This realization is coming to you now, and you are preparing for it. It is likely too that you are about to take a big step step forward when it comes to your romantic life. Are you about to propose? Or suggest to your partner that you take the next steps together? The Nine of wands tarot love meaning suggests that should you do the work, you’ll be successful.',
    meaningLoveReversed: 'All the preparations and work you have been doing in your romantic life may not be getting you the results that you expected. The reversed Nine of Wands tarot love meaning can indicate that despite your best efforts, the relationship that you have been fighting for has been draining and exhausting you. Disagreements are only natural, you are two different people after all, but make sure that you are not the only one in your relationship that is willing to do the work; both partners must be willing to compromise and meet each other halfway for a successful partnership. If you’re single, you may also want to ensure that the boundaries that you have set around yourself are not working to keep other people out.',
    meaningCareerUpright: 'Here, as in every position, the nine of wands marks the halfway mark in a battle. You are not done with the struggles, but they will end soon. At present, you are likely exhausted. The battle rages on but you likely feel as if you are too exhausted to continue fighting much longer. Let this card serve as a reminder that whatever troubles you face in your career right now are temporary. Perhaps your workload has been particularly heavy recently, it will lighten up. Whenever your troubles ease, you will see that you had the strength to fight until the end. You can persevere but the battle is not yet won.',
    meaningCareerReversed: 'You might be experiencing exhaustion and professional fatigue if you find the reversed nine of wands here. Whatever battles you have fought with work recently have left you drained of all energy. Remember that work is only part of your life. Try to recharge what strength you can gather be it at work or in the other aspects of your life. Also, be aware of any failure to compromise on your part as this could be the root of your exhaustion. It is particularly tiring to wrestle with your own morals, be aware of when you are engaged in such battles for work. Whether you are struggling against your own morals are external conflicts, it might be that you are fighting hard against a current that will not abate. Understand when you are tiring yourself out by fighting a futile battle. Sometimes a change of course is the best way to end a conflict. This is not necessarily a defeat. Change is a part of development. Be self-critical to determine if you are being strong or stubborn. ',
    index: 58
  },
  {
    name: 'Eight of Wands',
    description: 'The Eight of Wands is depicted as eight flying staves that appear as if they are suspended in the air. Some may look at them as wands that are blossoming that are traveling at a maximum speed. The background where they travel through is a clear sky which represents that there is likely nothing that will stand in the way of these making it to their destination. It shows a majestic landscape with a river that is streaming, the water breathing life to the image. The wands also appear like they are about to land, which signals the end of a long journey.',
    keywordsGeneralUpright: [
      'movement',
      'speed',
      'progress',
      'quick decisions',
      'sudden changes',
      'excitement'
    ],
    keywordsGeneralReversed: [
      'waiting',
      'slowness',
      'chaos',
      'delays',
      'losing momentum',
      'hastiness',
      'being unprepared'
    ],
    keywordsLoveUpright: [
      'romantic life picking up pace',
      'excitement',
      'surprises in love'
    ],
    keywordsLoveReversed: [
      'misunderstandings',
      'delays in love',
      'hectic pace',
      'confusion'
    ],
    keywordsCareerUpright: [
      'quick progress at work',
      'travelling for work',
      'motivation',
      'impact'
    ],
    keywordsCareerReversed: [ 'career stagnation', 'lost chances', 'overwhelmed by job' ],
    meaningUpright: 'The image depicted by the Eight of Wands means that the difficulties that were brought by the Seven of Wands are finally over. It signifies a strong level of energy which states that different aspects of your life will be trailblazing. Perhaps important news will be coming on your way, and you may experience a sudden, yet steady positive growth. The Eight of Wands meaning may also pertain to your work. There is a chance that the decision that you are waiting for will come your way soon. You need to be patient and just wait for it.\n' +
      '\n' +
      "When it comes to love, the eight of wands meaning pertains to your readiness to be committed on a relationship; however, the card advises you not to force the other party to also be ready on the commitment. Your significant other will soon be ready - forcing things to happen may affect the result negatively. In terms of finances, it appears like this is not the best time to make hasty investment. Just like in your love aspect, we advise you to be patient. Save your money and wait for the perfect time to invest. All things that you fought for are building in momentum. Where you didn't see progress earlier, you'll soon discover that they paved the way for the coming wave of action.",
    meaningReversed: 'Just like the upward Eight of Wands, the Eight of Wands reversed meaning is generally associated with patience. There is a possibility that you are feeling frustrated about something. You might now see that what you set in motion earlier created the obstacles that you are discovering right now. It is time for you to understand that you cannot change the past. You must forgive yourself, and adapt your strategy.In terms of work, there may be an existing disagreement in your office. You need to settle this quickly in order to avoid derailing any major issue. Breathe, think and try to relax. Be patient and believe that everything will be just fine. The Eight of Wands reversal meaning on love may pertain to possible jealousy. The jealousy that you are feeling right now has no basis and will just affect your good relationship with your partner. In the aspect of Health and Spirituality, you need to improve your focus, cooperation, and determination. The energy of the card will just dissipate if you are losing your focus.',
    meaningLoveUpright: 'Should you find your love life in a rut, you’ll be relieved to see movement and excitement once again. If you’re single, you’ll find that your romantic life is once again set in motion; a new love interest may spark a romance, and your love life can even be moving surprisingly quickly. Make sure you’re ready to take advantage of this sometimes frantic energy. If you’re currently in an existing relationship, surprises can be in store, giving the two of you some excitement in your relationship. It is likely that these surprises will be welcome ones, but other cards in the spread will help give more context.',
    meaningLoveReversed: 'Misunderstandings may play a strong role now, with the reversed Eight of Wands tarot love meaning. Regardless of whether you’re single or attached, make sure to think carefully about what you say or do. If you are tempted to do something, anything - instead of waiting, you may want to reconsider. Instead of pushing forward, you may be better off giving the other person time, or at least making plans. If you’re attached, life may be hectic at this moment, making it easier for communication to get lost or confused between you and your partner. Give your lover the benefit of the doubt as the two of you go through this period, and make sure to continue communicating.',
    meaningCareerUpright: 'The eight of wands represents rapid movement forward. Applied to your career, this principle can mean rapid movement in the literal or figurative sense. Physically, this card can sometimes indicate that you are about to take a business trip. If that is not the case, it is likely a more broad feeling you have towards the progress you are making at work. You might feel like you are growing rapidly in your career. This is a positive sensation for you right now. It is like you are bursting out from your shell and are finally able to make the impact you desire. This advancement is exciting and invigorating. Go forth with confidence that you will continue to surpass expectations.',
    meaningCareerReversed: 'In this position, the eight of wands has two meanings that can apply to your career. Either you are not moving fast enough in your job or you have moved too quickly in the past. Take stock of how you feel. If you are frustrated by a sense of stagnation at work, this card can signal that you have missed opportunities by failing to act in time. You are not advancing because you let the opportunity to do so pass. If, however, you recently moved up in your career, it might be that you moved too quickly. This concern will manifest by feeling overwhelmed by what people are asking of you. If projects seem daunting, it might be useful to talk to someone about how they handle such tasks. You will learn to handle your new responsibilities, but it will take time and patience.',
    index: 57
  },
  {
    name: 'Six of Wands',
    description: 'The Six of Wands tarot card depicts a man who is currently wearing a wreath of victory around his head. He is depicted riding a horse through a crowd of people who are cheering. The horse is white, which is a well-known symbol of strength, purity as well as success. The crowd is there to show the public’s recognition for the achievements of the man riding the horse. The wand that the man is carrying also has a wreath which is tied to it in an attempt to further emphasize his success. The man is not afraid, or shy about all of this attention but rather proud with his accomplishments. To this, the crowd around him reacts with cheerfulness and enthusiasm.',
    keywordsGeneralUpright: [
      'success',
      'victory',
      'triumph',
      'rewards',
      'recognition',
      'praise',
      'acclaim',
      'pride'
    ],
    keywordsGeneralReversed: [
      'failure',
      'lack of recognition',
      'no rewards',
      'lack of achievement'
    ],
    keywordsLoveUpright: [ 'success at love', 'fulfilling a relationship goal' ],
    keywordsLoveReversed: [ 'feeling unloved', 'feeling neglected', 'being overlooked' ],
    keywordsCareerUpright: [ 'career achievement', 'project completion', 'being rewarded' ],
    keywordsCareerReversed: [ 'failed work project', 'unrewarded work', 'unmet career goal' ],
    meaningUpright: 'This particular card is all about public recognition, victory, and success. Not only have you managed to properly succeed in achieving all of your goals, but you are also being publicly acknowledged for them and the results that you’ve managed to attain. You may have received an award or some sort of public acclaim. The card is indicative that you have managed to harness the strengths and talents that you have within you in an attempt to bring a particularly successful outcome in your life. You have managed to properly get through the confusion which is brought by the card before this one – the Five of Wands, and managed to properly minimize distractions, thus successfully focusing on your goals and achieving them.\n' +
      '\n' +
      'It’s also worth noting that there is a slight downside apart from the overall positivity that stems from the card. It can bring self-importance as well as egotistical behavior and arrogance. This could make you think that nobody is better than you.',
    meaningReversed: 'When the card is reversed, this suggests that you might find yourself doubting all of your abilities as well as your overall potential to achieve any kind of success. You might be feeling particularly negative about your entire self as if you have failed others as well as yourself. This is a symbol that means that you lack the confidence and drive that you need to achieve. You need the overall support as well as recognition of third parties in order to pick you up, to emotionally provide you with some much-needed strength.',
    meaningLoveUpright: 'If you’re single, the Six of Wands tarot love meaning signals that success is coming your way. It may be that others find you especially attractive right now. If you’ve been searching for someone, they may be more receptive to you than usual. All it takes is you making your approach. If you’re in a relationship, and you’ve been working together towards something, like moving in together after a long distance relationship, or buying a home, these goals are likely to come into fruition. The future between you seems bright, and can bring the two of you much joy.',
    meaningLoveReversed: 'Your confidence may be low right now; the reversed Six of Wands tarot love meaning can suggest that you aren’t getting the kind of love that you believe you deserve. You may be feeling looked over, and rivals who don’t have the same loving, caring attitude that you do are finding themselves successful instead. Oftentimes, what is needed is an attitude change; ensure that this does not turn into bitterness. Confidence and positivity are attractive, and negativity often repels others. If you’re in a relationship, you or your partner may feel unappreciated or neglected.',
    meaningCareerUpright: 'This six of wands is generally a very positive card that signifies success and self-confidence. These principles apply to your work-life when it appears in this position. You have likely reached an achievement at work of which you are particularly proud of. Rewards are also likely to come your way; it can mean a promotion or raise is forthcoming or recently occurred. If you recently completed a project, it will likely have good results. Whatever battles you have fought recently have been resolved in your favor. Savor this moment of contentment and confidence. Do not let your assuredness venture into egoism, but you can celebrate the end of previous conflicts and enjoy your current position.',
    meaningCareerReversed: 'When reversed the success generally associated with the six of wands is subverted. Instead of indicating triumph, in this position, the six of wands represents failure and a lack of ambition regarding work. It might be that you were passed over for a promotion or raise. If there was a recent conflict or competition at work, it likely did not or will not resolve itself in your favor. If there have not been such specific moments of tension, the six might be in reference to your general feelings at work. These feelings will manifest as a sense of stagnation or disinterest in projects. It could be that owing to a lack of drive, you feel stuck in your current position. Regardless of the exact context, this is a sign of underachievement. ',
    index: 55
  },
  {
    name: 'Five of Wands',
    description: 'The Five of Wands depicts five men all holding their own wands and brandishing them up in the air. Like with most fives in the tarot, it is about some kind of disagreement that is facing the querent. This disagreement can either be taken to be as a sign of conflict between the men, or that all of them are simply enjoying the adrenaline rush of this conflict, and that the competition amongst them is of a good natured rivalry, not anger. The relaxed way in which they seem to be holding their wands gives a sense that this argument may be one of show rather than a fierce one.',
    keywordsGeneralUpright: [
      'conflict',
      'competition',
      'arguments',
      'aggression',
      'tension',
      'rivals',
      'clashes of ego'
    ],
    keywordsGeneralReversed: [
      'end of conflict',
      'cooperation',
      'agreements',
      'truces',
      'harmony',
      'peace',
      'avoiding conflict'
    ],
    keywordsLoveUpright: [
      'competition between suitors',
      'conflict between lovers',
      'playful banter'
    ],
    keywordsLoveReversed: [
      'avoiding conflict',
      'trying to keep peace in relationship',
      'resolution'
    ],
    keywordsCareerUpright: [
      'competition between colleagues',
      'competitive work environment',
      'conflict'
    ],
    keywordsCareerReversed: [
      'competition or conflict at workplace is resolved',
      'avoiding work conflict'
    ],
    meaningUpright: "From the image on the card, the symbolism in the Five of Wands suggests that there is form of conflict in one’s life. This may be an existing conflict or one that is brewing and may eventually blow up in one's face. It may also depict a problem in communication, for example in a situation where no one really wants to listen to the other - meaning that no agreement or understanding takes place. The five men may signify problems in a group of people who are not patient enough to listen to what anyone else is saying. They only want to be heard, and since none of the others will listen, they all argue at once.\n" +
      '\n' +
      'Much of this can be solved by the querent taking the first step to try and initiate communication in such a way that you suggest that everyone airs out what they have to say, one at a time. By doing this, you will be able to address the problem, and everyone will be heard. Meaning they’ll all be satisfied.The Five of Wands can also mean that you are or will be facing competition in an area that you are not used to. This can be at work or school where you will meet people with the same abilities as you who pose quite a challenge - leading to feelings of jealousy, greed, and envy. This tarot card encourages that you accept the competition as a way for you to improve yourself without feeling any malice towards them. This means that you should learn how to cope with them in a civil way.\n' +
      '\n' +
      'The Five of Wands meaning could also be a personal struggle that you are dealing with on your own. This can be on a number of issues that affect you, hence you need to address them and find a solution for them. You will need to identify where the problems are and offer a solution that will handle the case.',
    meaningReversed: 'The Five of Wands reversed meaning can be that your natural method of dealing with disagreements is avoiding any kind of conflict by getting away from that place as fast as you can. Sometimes this can be regarded as a good thing, but other times, it may lead to a number of issues that are brewing up within you, for which you will have to address soon. On the other hand, it can also mean that you have worked through your troubles and that you do not have any more issues to worry about.',
    meaningLoveUpright: 'Action is required of you now when it comes to your love life. If you’re single, you may find that the one you desire can have many suitors, and you may have to compete for their affection. Make sure not to be carried away by this, and become too forceful; this can discourage your potential partner instead of drawing them closer. Should you already be in a relationship, there may be some small conflicts. Beware that what initially starts off as playful banter can turn into explosive arguments when either of you are stressed. It’s likely the arguments here are not too serious. Nonetheless, they will require some lightheartedness to remember how inconsequential they actually are to your happiness. Keep things playful.',
    meaningLoveReversed: 'Issues of how you deal with conflict can affect your relationships now. If you’re in a relationship, ensure that you haven’t been bottling up your resentments to avoid conflicts that the two of you need to have a smooth partnership. Eventually avoiding difficult conversations lead to an erosion of trust. Remember that every person has the right to their needs, and having needs does not make you any less lovable. If you’ve been doing the hard work of expressing yourself honestly with your partner however, you may find that misunderstandings are clearing up. What were once arguments may disappear once honesty and clarity have been achieved.',
    meaningCareerUpright: 'If you find the five of wands in this position, the conflicting and competitive nature of this card applies to your career. This might be a permanent condition as a result of your line of work. This card is common among people working in industries such as sales, banking, and athletes. If that is not the case and your job does not have a competitive element, it is likely a temporary state as a result of conflict over specific issues. You might be fighting against one individual for a raise or position. Regardless of the specific conflicts you face at the moment, you will have to contend with the egos of others. Thanks to the five appearing in the upright position here, it is clear that you are capable of defeating the challenges in front of you and banishing what is attempting to block your path. Remember, you are able to succeed, but you must fight for that victory.',
    meaningCareerReversed: 'A reversed five of wands here means that the conflict and competition which has been in your work-life recently is ending. It might be that you are moving to a less competitive industry or the environment around you is gradually becoming more friendly and relaxed. Regardless, this is a welcome change. It is a reprieve from your recent work conflicts that will allow you to invest your energy in other aspects of your life.',
    index: 54
  },
  {
    name: 'Three of Wands',
    description: 'The Three of Wands depicts a man who is standing on the edge of a cliff, looking over the ocean and the mountains. From the cliff edge, he sees everything that is ahead of him. The Wands are planted into the ground and surround the man as he grasps one in his hand. He seems to look forward and reflect on both the commitment that he has for his plans, as well as the method of execution in order to bring them to reality.',
    keywordsGeneralUpright: [
      'momentum',
      'confidence',
      'expansion',
      'growth',
      'foresight',
      'looking ahead'
    ],
    keywordsGeneralReversed: [
      'restriction',
      'limitations',
      'lack of progress',
      'obstacles',
      'delays',
      'frustration'
    ],
    keywordsLoveUpright: [
      'next stage in relationship',
      'romantic momentum',
      'creating lasting foundation'
    ],
    keywordsLoveReversed: [
      'frustrations or obstacles in love',
      'learning to compromise in love'
    ],
    keywordsCareerUpright: [ 'new horizons in career', 'expanding your career options' ],
    keywordsCareerReversed: [
      'obstacles in career path',
      'lack of growth and challenge',
      'feeling caged'
    ],
    meaningUpright: 'The meaning of the Three of Wands hints that you are planning or going to plan for the future with more conviction. This could mean that everything around your plans is going smoothly, as you have taken the time to plan your future, and are taking steps to turn plans into action. It hints that you are perhaps creating a stable foundation for yourself.The symbolism within the Three of Wands is that opportunities that can take place to widen your horizons in many areas. It also is a warning to keep your mind open as better opportunities could open up to you. As you take steps towards achieving what you set out to do, you are also becoming more aware of opportunities that are coming your way, and this could be take you out of your comfort zone. This pushes you to sometimes embrace change, and to start thinking in the long-term.\n' +
      '\n' +
      'The Three of Wands can show that you are in control and have a strong position, just like the character that overlooks and stands strong. The Three of Wands is one of the main cards of foresight and vision. The last Three of Wands meaning is that of travel in search of what you are seeking. There is a sense of leaving home, a voyage that must be undertaken. Great things do not happen to those that simply wait for them, you must expand. For most readings, this shows that you may travel to a new land over the water and that you may find an opportunity during your travels.',
    meaningReversed: 'The reversed Three of Wands indicates that you may have been embarking on personal journeys or developments, but you have not received the achievements that you were hoping for. This could be due to delays or road blocks. Despite all this, the card reminds you that all of your work has not been for nothing, but rather that it has helped you with your personal strength and fortitude.The Three of Wands reversed can also mean you need to take some time to plan your future. This is especially true if you have not started on your long term goals or have become overwhelmed by the tasks that you face now, or will have to face soon. You are only reacting and not acting with thought and deliberation.However, the most common Three of Wands reversed meaning is a nudge to include planning for future changes, and to watch for better options in case that they show up. The figure on the Three of Wands knows this and always keeps his eyes open for how the future could change, and it is a worthy lesson to learn.',
    meaningLoveUpright: 'With the Three of Wands, it seems that your love life is heading to its next phase. Should you find yourself in a new relationship, it looks like you’ll have to make sure to create a strong foundation for lasting commitment. If you’re in a committed relationship, this can be a great moment to set sight of your goals as a couple, and work together to achieve those goals. Have that conversation of what it means to move in together; communication about even the most mundane details can ensure that you take this step with the least amount of frustration as possible. Alternatively, this card also can signal travel; take the chance to explore the world together - or if you’re single, new places can spark the love you’re looking for.',
    meaningLoveReversed: "Sometimes you can't say or do the right thing; if this is the case it might seem easier to hide your head in the sand. This would be unwise; you really need to get any issues addressed and problems sorted now.The course of true love is seldom entirely smooth and any recent relationships may struggle to get off the ground, this doesn't mean they don't have wings, just that a bit of patience is called for. Trying to force things forward will be counterproductive. Before committing to a relationship, check your partner is all you think they are.In all relationships we have to compromise from time to time, demanding your partner changes to suit you can cause problems. Are you being realistic?",
    meaningCareerUpright: 'When upright, the three of wands depicts adventure and new experiences in every aspect of our life. This is true in the career position as well. Right now, you are likely to experience new opportunities to explore your career. Beyond that, your career can push to make bold choices that you might otherwise be hesitant to make. Here, it signifies a new chance or daring opportunity. This could mean starting a job abroad or otherwise traveling for work when you would not normally feel inclined to do so. This also applies to business. If you own a business and have debated going global, now is a good time to do so.',
    meaningCareerReversed: 'Reversed, the three of wands can indicate frustration, stagnation or rejecting opportunities that are being presented to you. There may be many things that you wanted to explore, but you might feel boxed in or like you’ve let chances go by without capitalizing on them. Perhaps you turned down the chance to go somewhere else for a new job or expand your business globally. If you have not recently made such decisions, it could be that your frustration and annoyance with a lack of progression or challenge at your workplace is taking its toll. ',
    index: 52
  },
  {
    name: 'Two of Wands',
    description: 'The Two of Wands card features a man standing on top of what looks like a castle and in his right hand he holds a miniature globe. From the way he is standing, the man is looking down upon the vast terrain, in which an ocean lies on the left-hand side, whilst the land stretches over on the right-hand side. The man is wearing an orange tunic and a red hat, symbolizing his enthusiasm towards life itself and hunger for adventure respectively. The miniature globe in his hand represents potential for possible expansion of his reach to broader life experiences.',
    keywordsGeneralUpright: [
      'planning',
      'first steps',
      'making decisions',
      'leaving comfort',
      'taking risks'
    ],
    keywordsGeneralReversed: [
      'bad planning',
      'overanalyzing',
      'not taking action',
      'playing it safe',
      'avoiding risk'
    ],
    keywordsLoveUpright: [
      'setting romantic goals',
      'making plans in love',
      'planning future together'
    ],
    keywordsLoveReversed: [
      'failed romantic plans',
      'lack of long term prospects or ideas of future'
    ],
    keywordsCareerUpright: [
      'planning your career',
      'taking first steps in your career',
      'envisioning dreams'
    ],
    keywordsCareerReversed: [
      'unexpected obstacles in career',
      'overanalyzing',
      'not taking action on plans'
    ],
    meaningUpright: 'The Two of Wands is a more mature version of the ace of wands, meaning that that this tarot card is all about planning and moving forward – progression. Look at it this way; you have already set out to achieve a particular task, which means you have turned an idea into a realistic plan. Such a plan will require fulfillment and therefore you have to progress from just having the plan to actually achieving what you set out for.Discovery is being considered as another two of wands meaning. This is because it means that you are stepping out of your cocoon and exploring new experiences and worlds. While the beginning might seem tough and difficult, the Two of Wands card encourages you to strive on and push forward.\n' +
      '\n' +
      'The Two of Wands card also means that you are beginning to realize your objectives and long-term goals before you set out to achieve these objectives. In other words, you have strived to get to where you are and now, moving forward, you have your long-term goals in mind.\n' +
      '\n' +
      'In summary, the Two of Wands meaning revolves around making decisions. In other words, you are either satisfied with your current knowledge, or you are moving forward and taking risks. It means, leaving our comfort zones and exploring new territory.',
    meaningReversed: 'The Two of Wands reversed meaning suggests the need to set up long-term goals. Begin the process of setting up your goals by identifying what to you is important. Proceed by planning how you intend on achieving such goals. Another Two of Wands reversal meaning suggests that you have ignored important fine points associated with planning your future. Lack of proper planning could be the reason for your downfall. Other interpretations can include either overconfidence or lack of patience, both are possible in bringing you disarray in your path forward.',
    meaningLoveUpright: 'What goals do you have when it comes to your romantic life right now? The Two of Wands tarot love meaning can signal that you’re in the process of considering changes, and making the plans to do so. If you’re in a relationship, you have the chance right now to make adjustments. If you are considering taking your commitment to the next level, this card suggests great promise, so long as you do the work to envision exactly what you want, and put your thoughts into action. Communicate with your partner, and create a path together into the future that you both want. Decisions you make together now can have the profound ability to push the two of you closer together.',
    meaningLoveReversed: 'Sometimes, regardless of one’s plans for the future, things don’t fall into place. Now may not be the best time to push your romantic goals forward. Love takes time to happen, and you may have to be more patient than usual. It is best to use this time to really consider what it is you want from your love life, and figure out a clear path to achieve it. The Two of Wands is a card of planning, setting expectations and charting a path forward, and the best laid plans are ones that start from a clear vision. The Two of Wands love tarot meaning can also signal you may be experiencing some hesitancy when it comes to your romantic interests.',
    meaningCareerUpright: 'When upright in the career position, the two of wands signifies that you are making plans for your future career. You may be taking a look at your ambitions and charting a path towards that dream. You can be considering the ideal company to work for, what your specialty may be, or laying down plans to start your own business. This can be an exciting time for you as your dreams are taking shape. Let these first steps be a strong motivation to continue down this path.',
    meaningCareerReversed: 'The two of wands, when reversed, can have two meanings. You may find that the plans that you laid out for your career path are not going the way that you envisioned. You may have missed details and had many obstacles that you did not foresee. These issues are creating trouble for you now. Alternatively, you may have made all the plans in the world; perhaps drawing out several scenarios and outlined all the risks. But fear may prevent you from taking your first steps. Instead of overanalyzing every single detail, it may be better for you to just take action. One cannot plan for everything; we have to trust in our own ability. ',
    index: 51
  },
  {
    name: 'Page of Wands',
    description: 'A well-dressed young man is boldly holding a stick standing on a barren land. His shirt is made in a salamander like pattern which is a symbol of transformation from bad to good. This young man is a passionate advocator, who is constantly spreading spiritual and social advancement ideas that lift up his fellow man. The desert in the background behind him both is indicative of his element, fire, and also represents that he is living in a world that has not bared fruit yet. His ideas are therefore completely hypothetical. However, if he were to choose to use them, and undertake the journey of his suit, his purity of heart could lead him to find better fortunes. ',
    keywordsGeneralUpright: [
      'adventure',
      'excitement',
      'fresh ideas',
      'cheerfulness',
      'energetic',
      'fearless',
      'extroverted'
    ],
    keywordsGeneralReversed: [
      'hasty',
      'impatient',
      'lacking ideas',
      'tantrums',
      'laziness',
      'boring',
      'unreliable',
      'distracted'
    ],
    keywordsLoveUpright: [
      'possibilities and adventures in love',
      'lively lover',
      'fleeting romance'
    ],
    keywordsLoveReversed: [
      'failure to commit',
      'unreliable lover',
      'aimless search for love'
    ],
    keywordsCareerUpright: [
      'new position or project',
      'taking risks at work',
      'eagerness for challenge'
    ],
    keywordsCareerReversed: [ 'boredom with job', 'lack of vigor in pursuing career goals' ],
    meaningUpright: `When we see the Page of Wands, we see a youth with enormous excitement and curiosity for the world. He knows what to do, he has the passion to succeed, but due to his inexperience and maybe a little fear of the unknown, his ideas remain abstract. He identifies new worlds to explore, new opportunities he could take advantage of quite easily, and he is even gifted with the "big picture" vision needed to succeed. Even with all of this, he still has the tendency to either remain dormant, or get easily distracted with one idea after the other. If he doesn't learn to control this, it might be that he squanders the opportunities to advance himself.\n` +
      '\n' +
      'When you get the Page of Wands, it simply means something is within you, something that triggers you to make discoveries, indulge in investments or take the next advancement in life. You could be just about to take a move on a certain idea, but some conflicting messages keep coming to your mind, and you get discouraged. This card resembles your inner battles which are preventing you from expressing your heroism to the world, to let the world know that you exist for a reason. If you are wise enough, this card is normally a trigger of courage. It should make you overcome the personal discouragements and move forward boldly to launch your ideas in the real world. Remove the fear, gather your resources and do something. Let the world know that you are there and you have no jokes about moving forward in the path that you choose. Conquer every obstacle, let your ideas shine and be known to the world because this card indicates a level of success that can only be achieved when courage is deployed.',
    meaningReversed: 'With the Page of Wands reversed, it tends to emphasize the more negative character traits of the upright version. He tends to show up when your mind is filled with one great idea after another, and are unable to progress beyond the beginning planning stages. Perhaps you have started a project or a hobby expecting that it would grow to great levels and instead you end up nowhere. As painful as it is, it is a good way of telling you that you should venture into other meaningful projects and avoid wasting time.',
    meaningLoveUpright: 'The world is brimming with possibilities with the Page of Wands tarot love meaning. If you’re single, you’ll find yourself excited to meet new people, and explore new realms when it comes to love and romance. You may also meet someone who embodies this page in your love life. As a person, the Page of Wands represents someone adventurous and lively, who falls in love quickly, but may also get bored quickly. Because they live for experiencing new things, it may be difficult to create a long term relationship with this person, but a fleeting romance could be rewarding. Couples may also find themselves more willing to try new things; you may take classes together, discover new hobbies, and even explore new adventures in the bedroom.',
    meaningLoveReversed: 'If you’re single, the reversed Page of Wands tarot love meaning can signal a person who may not be suited to commitment. They may not know what they want from their lives, and are likely to be wandering and unreliable. Their fiery personality may get them into trouble as well. This card can also indicate a period in your love life when you are unsure of what you’re looking for; without a clear direction, you may run into dead ends. You may need to spend more time deciding what it is you want in a partner instead of aimlessly searching for love. Should you be in a relationship, this card can signal a time of boredom and lack fo of momentum. You’ll need to put in some effort to bring some life back into your partnership.',
    meaningCareerUpright: 'The page of wands can be a great signal when it comes to new ventures. In the context of your career, it might mean that you are about to enter a new position or take up a new project. In either event, this card is a good sign; it signals that success and contentment will follow you in this endeavor. When the page appears, it is also an ideal time to take some risks with work. Just be wary of moving too quickly. The page represents an eagerness for challenges not necessarily a readiness to confront them. Ask yourself if you are prepared for new tasks before you start them. That being said, if you are ready, now is an ideal time to take some chances and start new projects.',
    meaningCareerReversed: 'The reversed page here indicates that you might be experiencing a disconnect between your desired career and your current one. This dissonance can be from a number of different causes. It could be that you know where you want to be but are unsure of how to get there. This can manifest in feelings of stagnation or ennui at work. Alternatively, you might know all the steps you would need to take to realize your goals but lack the motivation to take them. Regardless of the cause, take stock of where you are, where you want to be, and try to find out what will help you get there. Nothing is permanent; so, do not think that this current state will continue forever. It will, however, pass faster if you can realize what has been holding you back.',
    index: 60
  },
  {
    name: 'Queen of Wands',
    description: 'The image depicted in the Queen of Wand shows a queen sitting proudly on a throne while facing forwards which is a clear symbol of strength and fire. She is holding a sunflower in her left hand, and the image of the sunflowers are also carved on the throne - meaning happiness, satisfaction, and fertility. In her right hand, she is holding her wand which is starting to blossom, and symbolizes life. In her positive aspects, the Queen of Wands can be associated with fidelity, sustenance, and warmth. Her hidden side is hinted at with the placement of the black cat at her feet, which is traditionally a symbol of witchcraft and occultism, but can also point at her ability to grasp with her deep intuition.',
    keywordsGeneralUpright: [
      'confident',
      'self-assured',
      'passionate',
      'determined',
      'social',
      'charismatic',
      'vivacious',
      'optimistic'
    ],
    keywordsGeneralReversed: [
      'demanding',
      'vengeful',
      'low confidence',
      'jealous',
      'selfish',
      'temperamental',
      'bully'
    ],
    keywordsLoveUpright: [
      'independent',
      'cheerful and confident lover',
      'openness in relationship'
    ],
    keywordsLoveReversed: [
      'selfish and demanding lover',
      'jealousy',
      'dominating lover',
      'arguments'
    ],
    keywordsCareerUpright: [
      'determination and passion at work',
      'inspiring or leading others'
    ],
    keywordsCareerReversed: [ 'lack of motivation in career', 'selfish or jealous colleague' ],
    meaningUpright: 'In general, the Queen of wands in a reading meaning may depict a person of extreme focus and fiery passion. She is courageous and individualistic, though at times she may appear self-centered. They have a positive and an uplifting energy; they represent someone who is willing to be by your side and stand up for you. \n' +
      '\n' +
      'In terms of work, the Queen of wands signifies that you are planning to accomplish a significant amount of achievement in just a small amount of time. In the event that you are looking for a job, the appearance of this card may mean that a woman will play a major role in your career move. Generally speaking, in terms of your career, things are looking pretty good. The Queen of Wands in questions of love also sends a positive energy. For people who are searching for love, there is a possibility that you will find it soon.When it comes to your finances, there is a chance that you are being carried away on spending a significant amount of money. We advise you to keep your expenses on check, or you will regret it in the end. In terms of health and spirituality, the Queen of Wands meaning may pertain to a spiritual hunger, a quest, or a search for meaning.',
    meaningReversed: 'Regardless of its position (upright or reversed) the Queen of Wands symbolizes fertility, and all the feelings, emotions, and aspects that it brings. It may mean that there is someone who needs your help right now. In terms of work, there is a probability that you will encounter obstacles that will hamper your progress. Do not mind these obstacles and continue doing your job as you see fit. To see this card may also be a reminder to adhere to your rational side - to balance your sometimes chaotic energy with clear though, and you will be more successful.',
    meaningLoveUpright: 'This card represents an independent person, who is confident, outgoing and friendly, and who approaches love and relationships with a self-assuredness that is refreshing. She is not likely to change who she is in order to fit any other person’s desires, and generally doesn’t care what others think of them. The Queen of Wands tarot love meaning can be encouragement to be open and proud of your individuality and go out in the world and mingle. You can stop worrying about how you appear or how others perceive you and simply enjoy being around others. Your courage and self-possessed nature will draw others to you and inspire them to do the same. If you’re in a couple, you may find success being more open than ever with your partner. This honesty and frankness can draw you closer together. The Queen of Wands is also a very sensual character; this can also be a time of greater intimacy between lovers.',
    meaningLoveReversed: 'There’s a difference between being self-assured and self-centered. The reversed Queen of Wands tarot love meaning can represent someone whose fiery temper can occasionally go out of control, and whose fickleness and selfishness can mean that they quickly lose interest in you. They may have a hard time caring for your needs, while being demanding of satisfying their own. Should this not appear as a person entering your love life, this card can instead indicate you or your partner may at the moment be rather dominating and perhaps a touch neglectful of the other’s needs, or there may be explosive arguments in your relationship at the moment. Give yourself time to be gentle, to listen, and to address any feelings of insecurity that are lingering.',
    meaningCareerUpright: 'If you find the queen of wands here, it means that you have both the energy and the ability to execute your ideas at work. Whatever you are facing in your career, you can approach it with determination and passion. This drive can apply to your general situation at work or might be more specific to your position. You might already be in a leading role in your career. It could be that you mentor others or are about to start serving as a role model. Regardless of the specifics, you are a force in your field. Right now, you have the energy and passion to lead others in a way that is particularly meaningful and positive. Use this time to advance in your career and to support those around you to the best of your abilities.',
    meaningCareerReversed: 'The queen of wands, when reversed, shows a lack of professional enthusiasm. You might be drained or unwilling to take on new tasks. This negativity towards work can affect both your outlook on your performance in your work life. While your career is only part of your life, it is important to feel satisfied with the work you do. There might be a lack of fulfillment in your general demeanor if you do not see value in your career. Thus, you should make an effort to remember what motivated you to find this job, the aspects about it that you like, and any other positive attributes you can prescribe to it. Consider making a list and reading it aloud every morning (or find some other way to work this positivity into your routine). Your outlook towards work can change, but this cloud will pass faster if you make a conscious effort to defeat it. ',
    index: 62
  },
  {
    name: 'King of Wands',
    description: "The King of Wands depicts a man who has in his hands a blossoming wand, which is set to represent creativity and life's passion. His throne, as well as his cape, are decorated with the salamander and the lion, which are symbols of fire and strength. The salamander that is biting his tail represents the infinity as well as the overall drive to move through all obstacles. The robe is bright and orange resembling a flame, while the crown is shaped like a tongue of fire. Let’s go ahead and take a deeper look at the symbolism behind the King of Wands.",
    keywordsGeneralUpright: [
      'leadership',
      'vision',
      'big picture',
      'taking control',
      'daring decisions',
      'boldness',
      'optimism'
    ],
    keywordsGeneralReversed: [
      'forceful',
      'domineering',
      'tyrant',
      'vicious',
      'powerless',
      'ineffective',
      'weak leader'
    ],
    keywordsLoveUpright: [ 'energetic', 'charismatic lover', 'taking the lead in love' ],
    keywordsLoveReversed: [ 'arrogant', 'bossy lover', 'control issues', 'forceful lover' ],
    keywordsCareerUpright: [ 'achievement in career', 'respected position', 'mentorship' ],
    keywordsCareerReversed: [
      'lack of leadership at work',
      'depending on others',
      'passiveness at work'
    ],
    meaningUpright: 'The meaning of the upright position of the King of Wands represents pure energy. Unlike the other wands cards in the deck however, this particular one is not focused on pure creativity. Instead, this king is actually way more likely to take an idea and to decisively implement it himself. The King of Wands is a natural born leader of people, and he is also extremely capable. Once the king sets for himself a certain aim or a goal, he is going to conveniently stick to it in order to ensure that it becomes a reality.\n' +
      '\n' +
      'The King of Wands looks forward to all sorts of different challenges - whether great or small, for he gets a natural adrenaline rush associated with the solving of problems.',
    meaningReversed: 'The negative aspect of the card is associated, as you may guess, with a feeling of arrogance. He can even be rather aggressive in the actual pursuit of his goals, regardless of whether he’s actually conscious or not of it. He wouldn’t show restraint, nor even the humbleness to know when his assistance isn’t actually required.\n' +
      '\n' +
      'When reversed, the card depicts a personality which is prone to taking rash, impulsive and hasty decisions. This person could be pushy, overbearing as well as dominating at times. Even though he might rarely do this with a sense of malice or with an intention to make someone feel submissive, this is without a doubt a part of his character that one can be frustrated at.In reversal, the card represents the worst spectrum of the qualities of the fire – selfishness and ruthlessness. He can be manipulative as long as you are serving his purpose. With this in mind, the card definitely points out strong and weak aspects, and reflecting on his image can help you dig deeper in your personality. ',
    meaningLoveUpright: 'There’s never a dull moment with the King of Wands, and in your love tarot reading he can appear as an energetic, natural leader that is generous with both their time and their resources. Their fiery nature means that they may have quite a temper, but he is as quick to forget his anger as he is to incite it. With such energy, some folks may find the King of Wands to be rather exhausting, but he brings excitement to every situation. Should this card not appear as a person that is entering your life, this card can indicate a time of focus and perseverance. You may be putting extra effort into you romantic situation now, and this could have great rewards. If you are in a relationship, this card is a happy one; the love between the you is passionate and deep, though sometimes you can still have an argument here or there.',
    meaningLoveReversed: 'Reversed, the King of Wands tarot love meaning can point to an arrogant, aggressive and bossy bully. Should the card not appear in your life as a person in your life, you may have to consider your own actions. Have you been controlling, dominating or egotistical? There’s a good chance that if you’re facing issues with relationships and romance, this attitude may be the reason. You may be thinking you are doing the right thing, pushing others to be their best self, but even the best intentions can be soured with a forceful, pressuring hand. Everyone has their own way of learning, and you may be better off letting your partners explore their own solutions to their own problems, instead of coercing them to do things your way.',
    meaningCareerUpright: 'The king of wands in your career reading can signal success and respect in your field. These ideas are linked at the present moment; you do not have to pick which applies to you. If you see the king, it is likely that you are in a high position. You might be a mentor to others. Alternatively, those around you might see you as a laudable person with morals and values. The king also suggests a boom in business. Your career is doing particularly well right now. This is not just a temporary condition. There is a longevity to your success. Your victories are likely the result of your ability to take chances when daring is needed and be cautious when it is required.',
    meaningCareerReversed: 'The reversed king of wands here can signal a lack of leadership and direction. You might wait for others to bring you things instead of chasing opportunities yourself. If you continue to wait for others to define your purpose, you might never find something that truly fits your passions. Serendipity is useful and important in many careers; it is not, however, a reliable source. Try to define your own wants and needs. If you have a goal or career in mind, things might not be going well in your career because you lack the confidence. It is important to trust your own instincts over the advice of others sometimes. Everyone views the world through their own lens; remember that someone else’s bias might cloud their vision of what you need. Trust yourself in your career.',
    index: 63
  },
  {
    name: 'Knight of Wands',
    description: "The Knight of Wands is seen on his horse that is reared up and ready for action. Judging from the knight’s clothes and armor, as well as his horse, he is prepared for what’s ahead. He is wearing a yellow patterned shirt on top of his metal armor. He is also wearing an armor helmet with red plume sticking out of it. He seems to be ready for battle, except he is holding a large wand instead of a sword. His horse is orange in color and has a mane that looks like flames. When you look at the Knight of Wands' face, you’ll see the determination of wanting to be successful in his endeavor. Fire is a dominate factor in the Knight of Wands' symbolism. The decorative tassels hanging from his arms and back, as well as the horse’s mane, are all in the color of flame. He is also wearing a yellow shirt printed with the fiery salamander symbol.",
    keywordsGeneralUpright: [
      'courageous',
      'energetic',
      'charming',
      'hero',
      'rebellious',
      'hot tempered',
      'free spirit'
    ],
    keywordsGeneralReversed: [
      'arrogant',
      'reckless',
      'impatient',
      'lack of self control',
      'passive',
      'volatile',
      'domineering'
    ],
    keywordsLoveUpright: [
      'fearless',
      'courageous lover',
      'difficult to commit',
      'rash',
      'erratic relationship'
    ],
    keywordsLoveReversed: [
      'running from commitment',
      'impatience',
      'unstable relationship'
    ],
    keywordsCareerUpright: [
      'passion and energy for work',
      'brave decisions',
      'new business favored'
    ],
    keywordsCareerReversed: [
      'lacking direction in career',
      'rushing through jobs',
      'unreliable work'
    ],
    meaningUpright: "The Knight of Wands' symbolism is straightforward. When it appears, it means a great time to get away and travel. The person should feel charged up and full of life. One is also ready to get things done. He is adventurous and can find fun things to do no matter where he is. There is never a dull moment when the Knight of Wands is around. When the Knight of Wands shows up in a reading it seems to suggest that the seeker wants to complete important tasks. One wants to impress others with one’s knowledge and skill. The card also shows up when the person is planning to move to another place of residence. If you are starting a creative project, then you should do so with lots of energy and enthusiasm. However, you should balance it with realistic and well-rounded views. You should also have a plan that takes into account the consequences of your actions.\n" +
      '\n' +
      'Getting the Knight of Wands in a reading can also mean that there is an event that you don’t expect to happen soon. If it is accompanied by the Eight of Wands, then you should expect a lot of changes in your life. More often than not, the Knight of Wands indicates a hasty change of job, residence, or anything in your life.',
    meaningReversed: 'When you get a reversed Knight of Wands, it indicates frustrations and delays. You may feel angry and that you are not getting anywhere. A reversed Knight of Wands can translate to a loss of power. You may be trying to compensate for something that you don’t have total control over - this might lead to pessimism and loss of self-esteem.',
    meaningLoveUpright: 'Someone who is full of vitality and fearlessness may have just entered your love life with the Knight of Wands tarot love meaning. They are likely to be very impulsive, charming, and passionate. But their rash and volatile nature can make it difficult for them to settle down with one person. If this card doesn’t represent a person, it can instead point to a period in your love life that is exciting, but also erratic and adventurous. You may be more prone to taking risks at this time, which can pay off handsomely. Fear of rejection may not be a problem at this moment.',
    meaningLoveReversed: 'You or another person in your life may be running from the idea of commitment right now. The reversed Knight of Wands tarot love meaning indicates impatience, instability and recklessness. This person may find themselves chasing after their heart’s desire one moment, but when they have it, quickly change his mind after. They may love the pursuit of romance, but not so much the simple, steady love that comes after. If you’re in a relationship, you may find that it feels unsteady right now, but this can also be due to the changes in your environment. Arguments are easy to spark now.',
    meaningCareerUpright: 'The knight of wands is an enthusiastic card. This energy is a perfect complement for those who are starting new ventures. You are likely passionate about the new project that you are facing at work. You might be eager to take on new responsibilities. If, however, you are not starting anything new, you might be a bit frustrated at this lack of progress. The knight of wands can be a bit of a double-edged sword in that way. If you have a burst of enthusiasm but fear it might be going to waste, try to seek out new opportunities yourself. It might be that you have been waiting for things to fall into your lap when really you should have been seeking them out. Utilize your energy to advance, even if it takes extra effort on your part.',
    meaningCareerReversed: 'The reversed knight of wands can mean that you are directionless in your career. Unmoored,  you might be bouncing from job to job without considering what you want and how you need to get there. While unpredictability is common in many people’s careers, it is becoming problematic in yours. Routine might be intimidating or boring, but if you have a direction you want to go in, you will likely have to embrace these characteristics in your future work. This does not mean you need to settle down now, it just suggests that you start moving vertically in a direction instead of horizontally.',
    index: 61
  },
  {
    name: 'King of Cups',
    description: 'The King of Cups is a card in the tarot that shows generosity, control, and emotional balance. The card itself depicts a king seated on a throne, who has an amulet that is shaped like a fish. The fish in his necklace represents his creativity and spirit, which thrives on the calm waters that surround him. We can see from the background that there is a steady balance between the conscious and unconscious.Behind the king, there is a fish jumping out of the ocean on the right side, and a ship on the left side, representative of the emotional and material worlds respectively. The King of Cups shows that you do not suppress your impulses, but have learned to deal with them in a balanced manner.',
    keywordsGeneralUpright: [
      'wise',
      'diplomatic',
      'balance between head and heart',
      'devoted',
      'advisor',
      'counsellor'
    ],
    keywordsGeneralReversed: [
      'overwhelmed',
      'anxious',
      'cold',
      'repressed',
      'withdrawn',
      'manipulative',
      'selfish'
    ],
    keywordsLoveUpright: [
      'using head and heart in love',
      'a compassionate but calming partner'
    ],
    keywordsLoveReversed: [
      'manipulation',
      'deceit and selfishness in love',
      'being lead on or used',
      'not putting in effort'
    ],
    keywordsCareerUpright: [
      'balancing emotional',
      'practical and logical needs',
      'wisdom leads to respect and admiration'
    ],
    keywordsCareerReversed: [
      'selfishness at work',
      'staying at job despite lack of emotional fulfillment'
    ],
    meaningUpright: "The King of Cups is one of the most influential cards in the suit of Cups. He represents creativity, emotion, and the unconscious. The card shows the ability to restrain one's emotions and be fully in charge of your feelings and impulses. Therefore, the King of Cups represents a balance between the intellect and emotions. He indicates that there is a strong relationship between understanding and feeling.\n" +
      '\n' +
      'When you have balanced your emotions and are able to control them, it means that you have a deeper knowledge and awareness of yourself. When you are faced with challenges that would normally throw you off balance, the King of Cups is there to remind you that you should act as he does - do not fly out in a rage, or immediately throw yourself into despair! You first need to temper the state of your emotions, so that you can progress forward in reality. Learn to evaluate yourself so as to determine how you can create a stronger awareness of your own internal state.\n' +
      '\n' +
      'There are instances when the King of Cups can symbolize an older male who is in your life. This is a mature man who is willing to take responsibility for his actions and has mastered his own self-understanding.The King of Cups tends to be political and diplomatic, and this makes it possible to for him to balance the needs of others, and enhance the harmony among all parties involved. The King of Cups shows that you are sensitive as a leader and you are careful with the way others respond to your emotional needs. The King of Cups implies that you should remain mature when dealing with negative energy.',
    meaningReversed: 'The King of Cups reversed signals what happens when he is at his worst: volatility, emotional manipulation and moodiness.\n' +
      '\n' +
      'When the King of Cups falters, his usual ability to handle situations with compassion and wisdom are turned upside down. He is unable to balance the needs of all that seek his guidance, and while appearing kind to some, may be cold to others. His talent in navigating the emotions of others may be put to dubious uses, manipulating circumstances to fit his needs.\n' +
      '\n' +
      'The reversed King of Cups suggests that there is a character in your life that is depicted by this card, whether a part of you or someone else. While he is normally very in touch and controlled with his emotions, he has lately become manipulative and emotionally controlling. His actions will be used for vengeance and vindication, impulses that he normally has under control, and is eventually aimed at being some form of punishment. ',
    meaningLoveUpright: 'A balance between the heart and the head is represented by the King of Cups tarot love meaning. This person is emotionally mature, and values family. When emotional tensions are high, their calm and collected responses are just what everyone needs to maintain peace. When this card isn’t represented by a person in your life, it can be a suggestion to use both logic and intuition in your approach to love. Approach romance with practicality, but also with wisdom, compassion and understanding. Combined, the love you find is sure to be deep and rewarding.',
    meaningLoveReversed: 'This king lacks consistency, empathy, or morals. In love, he can be rather manipulative and selfish, using his emotional intelligence for his own desires. If this doesn’t represent a person, you may have to deal with a love interest leading you on, or using you. Alternatively, the King of Cups tarot love meaning can simply suggest some kind of selfishness in your romantic life. You or your partner may not be putting effort into your relationship, content to let your partner do much of the work.',
    meaningCareerUpright: 'At times, the king of cups can signify a more experienced, caring and compassionate advisor or mentor who can help you develop an emotionally fulfilling career. This card is also about balancing one’s emotional needs and practical, logical needs. Your wisdom and ability to balance your head and your heart can win you the respect and admiration of those around you, and can make you especially valuable when it comes to ironing out conflicts between various parties in the office. ',
    meaningCareerReversed: 'The reversed king of cups can signify dealing with a boss or a manager who has become a bit of a tyrant. While the upright version of this card is compassionate and emotionally aware of how others are doing, this reversed king can be selfish, and ignorant of everyone’s needs except their own. Insecurity and lack of emotional control can play a big factor in how this person handles their work environment. At times, this person can also be you. Sometimes, this card can indicate that you are at your position solely for the money, and you may be feeling unfulfilled. Even if you began at this position with excitement and passion, it may be slowly disappearing. Try and see whether you can reconnect with what you enjoyed about this job in the first place. ',
    index: 35
  },
  {
    name: 'Queen of Cups',
    description: 'The Queen of Cups rules the emotional realm. She is the woman whose throne is right on the ocean’s edge, and water is typically symbolic of the unconscious and feeling. Her position at the shore indicates that she lies between land and sea, the place where feeling and thought exist. She holds a cup that has handles shaped like an angel. This cup is closed, which is why the Queen of Cups symbolizes the thoughts that come with our unconscious mind. The queen sits alone, which allows her to think. The calmness of the water and the sky symbolizes the serene mind of the queen. Her feet are not touching the water, which stands for her looking at her thoughts and feelings from the outside. ',
    keywordsGeneralUpright: [
      'compassion',
      'warmth',
      'kindness',
      'intuition',
      'healer',
      'counsellor',
      'supportive'
    ],
    keywordsGeneralReversed: [
      'insecurity',
      'giving too much',
      'overly-sensitive',
      'needy',
      'fragile',
      'dependence',
      'martyrdom'
    ],
    keywordsLoveUpright: [
      'caring and supportive nature brings suitors',
      'deepening existing relationships'
    ],
    keywordsLoveReversed: [
      'a dependent or clingy lover',
      'putting more effort in than partner',
      'overly-sensitive lover'
    ],
    keywordsCareerUpright: [
      'taking the role of carer at work',
      'seeking out support and compassion at work'
    ],
    keywordsCareerReversed: [
      'emotional exhaustion at work',
      'neglecting your own emotional health for job'
    ],
    meaningUpright: 'We can understand the meaning of the Queen of Cups from taking a closer look at the woman in image. She is seen as compassionate, caring, sensitive, and nurturing. She connects with people on the emotional level, so people enjoy her honesty and fairness. The appearance of the Queen of Cups in a reading can be guiding you to find help from others. Most times, like the other queens, this is a female figure that will come into your life. The Queen of Cups has an intuition which is very powerful, and is only rivaled by the one of the High Priestess. The Queen of Cups acts as a mirror and reflects the depths present in others, so they see themselves in a new light. Most times, the Queen of Cups can also represent the trusted inner voice you have within you. She seems to say that you should take the time to focus on your emotional health before trying to help others. Self-love creates compassion. \n' +
      '\n' +
      'The Queen of Cups can also reflect your relationships with other people. You may be the emotionally strong rock that serves as an anchor for someone else. You may be here to help teach and support others using your intuition, instead of logic. The Queen of Cups normally thinks with her heart, instead of her mind. She can lack rationality and common sense, but she can also be intuitive, dreamy and almost psychic at times. The Queen of Cups could be the answer to your problems when a logical approach is not working.',
    meaningReversed: 'The Queen of Cups reversed means that you are not in sync with your emotions. You can also feel restricted in the expressing the way that you truly feel. Most times, bottling up your emotions can be very damaging and will lead to a boiling point in the near future. You may have high levels of stress that you are not able to cope with anymore. The Queen of Cups reversed can also reflect that your mind is wandering too far, and you are letting your imagination run away with itself. While you still mean well, you should take a pause to really see whether your emotions can be trusted, because you are allowing them to control you. You need to take some time to think if these dreams can be turned into reality. You should try to be more emotionally stable during these times, so you will know when your emotions are getting the best of you.',
    meaningLoveUpright: 'With her wise, supportive and kind nature, the Queen of Cups is likely to have many admirers. Her compassion makes it quite natural for her to lend an ear to anyone who needs a listener or a shoulder to cry on. If there is nobody entering your life now with these traits, you may find that it is you taking on this role. You may attract many people this way, but be careful avoid someone clingy and too dependent on you. It is important to be able to draw boundaries at this time, as emotional support is also emotional labor. Don’t wear yourself out. Let your intuition guide you. Those in relationships can enjoy deeper love at the moment.',
    meaningLoveReversed: 'Do you find yourself always taking the role of caregiver and supporter in your relationship? The reversed Queen of Cups tarot love meaning can signal that you’re putting much more effort into the relationship than your partner. You may even occasionally feel more like a parent than a lover. The balance between the two of you must be corrected. Alternatively, you may find the emotional environment to be rather turbulent and constantly shifting. You or your partner may feel as though you are walking on eggshells, never knowing when the next argument will arise.',
    meaningCareerUpright: 'The queen of cups is a particularly caring and compassionate card. Thus, if she appears in relation to your career, you can consider several meanings. This queen can serve as a reminder that whatever you are doing should help you feel fulfilled emotionally and not just financially. When it comes to your workplace environment, this card can point to someone that takes on the caring and compassionate role amongst your colleagues. Sometimes, this card can also signal that you are taking this role. Along this vein, the queen also hints that the guidance of a person with this nature in your field could benefit you.',
    meaningCareerReversed: 'When the queen of cups is reversed and appears in the context of your career, you may be dealing with some emotional issues at work. You may find that the projects you’re working on, or the environment you’re in is emotionally draining right now. Sometimes, the exhaustion that we feel comes from our own needs being unmet. Since the queen of cups can be so focused on the needs of others, it may be difficult for her to put her needs as a priority. Have you been so focused on making your colleagues, clients or your boss happy that you have neglected doing what makes you happy? Take the time to take care of your own emotional health for now.',
    index: 34
  },
  {
    name: 'Knight of Cups',
    description: "The Knight of Cups is a card which depicts a young knight who is gloriously riding a white horse while at the same time holding a cup as if he is a messenger of a certain sort. Unlike the Knight of Wands or the Knight of Swords, this particular one isn’t charging along with his horse. He is instead moving slowly forward which provides the entire setting an overall impression of peace and calmness. The horse is known to represent one's drive, energy, and power. The horse's color is white, which is a well-known symbol of spirituality, light, and purity. ",
    keywordsGeneralUpright: [
      'idealist',
      'charming',
      'artistic',
      'graceful',
      'tactful',
      'diplomatic',
      'mediator',
      'negotiator'
    ],
    keywordsGeneralReversed: [
      'disappointment',
      'tantrums',
      'moodiness',
      'turmoil',
      'avoiding conflict',
      'vanity'
    ],
    keywordsLoveUpright: [
      'romance',
      'attraction',
      'flirtation',
      'being in love with love',
      'unrealistic expectations of love'
    ],
    keywordsLoveReversed: [
      'avoiding conflict in love',
      'passive aggressive partner',
      'quickly changing feelings',
      'false appearances'
    ],
    keywordsCareerUpright: [
      'diplomacy at work',
      'tactfulness creates better team cohesion',
      'creative solutions'
    ],
    keywordsCareerReversed: [ 'tensions and moodiness at work', 'avoiding work confrontation' ],
    meaningUpright: "The truth is that the Knight of Cups is the most feminine amongst all the Knight cards in the tarot. It's important to note though, that this doesn’t even slightly suggest that he is any less of a worthy knight. It implies that he is in proper touch with his emotions and his intuition, and that he uses them for his own well-being and during his many romance and seduction quests. He is usually quite attractive and charming to others, regardless of their gender. When faced with an actual decision, the Knight of Cups is going to listen to his heart, regardless of whether this is actually a logical choice or not. He can also manifest as an event or a person in your life, or a part of your own self. He appears as a messenger – and with him, he carries an invitation or an arrival of something or someone which is going to have a certain emotional benefit for you. As a knight, he is also charged with taking the gifts of his suit, and bringing it outward into the world. He therefore can also represent the undertaking of some project with significant emotional or creative value for you.",
    meaningReversed: 'Now that you are aware of the upright Knight of Cups meaning let’s take a look at what the card says when it is upside down. Reversed, the Knight of Cups means that you allow your emotions to control your life a lot more than you should. You might be overly jealous, emotional or moody. In fact, this could get up to the point of actual incapacity to take action, which is most definitely to be avoided. Jumping to conclusions too fast is characteristic of a reversed Knight of Cups, and making judgements without having the necessary information is very common. The card indicates a situation which could be considered appealing at first but quickly turns out to be something very different. With such high expectations, everyone will walk away quite disappointed.',
    meaningLoveUpright: 'Romance is coming your way with the Knight of Cups tarot love meaning. This person is very much in love with the idea of of love, and goes out of their way to show it. Sometimes though, this person goes a bit too far in their pursuit of true love; so much so that they have rather unrealistic expectations of perfect partners and perfect relationships. Without a gentle dose of reality, they can go from lover to lover, leaving a string of broken hearts simply because each finally showed their very human flaws. Be aware of approaching your romances with this attitude. Try and enjoy things in the moment, and keep the real world in sight as you go on your quest for love.',
    meaningLoveReversed: 'When the Knight of Cups is reversed, he can be rather passive aggressive, and full of empty promises. Being a great romantic, many of his tales and his proclamations of love can be over exaggerated. If this doesn’t sound like a person in your love life right now, it can instead point to feeling overwhelmed with the emotional changes that are occurring in your romantic life. Feelings can run hot and then cold, and perfect appearances can be quickly shattered. Be wary of lovers that whisper sweet nothings, and make sure that they truly mean what they say.',
    meaningCareerUpright: 'The knight of cups represents your ability to handle situations at work with tact and grace. You are particularly diplomatic right now. Conflicts around you can be easier to deal with at this time. You are able to resolve issues with creative solutions, as well as your emotional connection and awareness of others. You can see solutions that might otherwise remain undiscovered. This creativity can apply to you and your intended profession in general. If you have been considering entering a job in a creative industry, this card can also signify your success in that field.',
    meaningCareerReversed: 'When It comes to your career, the reversed knight of cups can have numerous interpretations based on the context and other cards in the spread. Your office environment may be rife with disagreements right now, and everyone may be on edge. You may also want to consider how you are handling your emotions at work right now; is your moodiness contributing to this environment? Alternatively, it may be that your desire to maintain the peace is getting to self-destructive levels. Instead of dealing with your problems, you may be doing whatever you can to avoid confrontations, even if it can be helpful to express these frustrations. Try and strike a balance between being so diplomatic that you take on everyone else’s problems, versus lashing out when it is inappropriate. ',
    index: 33
  },
  {
    name: 'Page of Cups',
    description: 'The Page of Cups represents the unexpected inspiration that comes to us from the unconscious, perhaps in ways that we may not truly understand. In this card, a youth at the seashore wears a blue tunic adorned with floral prints, and holds a golden cup. She also wears a beret that looks quite bohemian, and a long flowing scarf. She is surprised by a fish that pops out of the cup, as if to greet her from a fairytale. She can neither drink nor toast with the cup as the fish stares at her and seemingly tries to engage with her.',
    keywordsGeneralUpright: [
      'idealism',
      'sensitivity',
      'dreamer',
      'naivete',
      'innocence',
      'inner child',
      'head in the clouds'
    ],
    keywordsGeneralReversed: [
      'emotional vulnerability',
      'immaturity',
      'neglecting inner child',
      'escapism',
      'insecurity'
    ],
    keywordsLoveUpright: [
      'fresh perspective on relationship',
      'awe and wonder at love and romance'
    ],
    keywordsLoveReversed: [
      'a shy',
      'vulnerable partner',
      'emotionally immature partner',
      'insecurity in romance'
    ],
    keywordsCareerUpright: [
      'finding a creative outlet at work',
      'daydreams about career paths'
    ],
    keywordsCareerReversed: [
      'emotional vulnerability at work',
      'insecurity at work',
      'creative blocks'
    ],
    meaningUpright: "One of the most important meanings within the Page of Cups is that you should be open to new ideas, especially ones that stem from intuitive inspiration. The card seems to state that such inspiration should be embraced, despite it being something that you may not expect. It could lead you to adventure and open many doors. If it is a calling of a creative nature, for example, one to get into music or art, there's an especially strong push from this card to go for it. When you are being faced by difficult situations, and you have stopped chasing your dreams, the Page of Cups seems to say that you that you should tackle the issue from a totally different perspective. It symbolizes persistence as this is the only way that you can make your dreams come true. Listen to your intuition, follow your calling, and believe everything is possible.\n" +
      '\n' +
      'For those that are afraid to reveal their emotions, the Page of Cups could mean that it is time to release and show those emotions. The creative you and the emotional you should both be expressed, no matter how insignificant they may seem. In most cases, some people cannot express themselves as they want to protect their ego. The Page of Cups indicates that it is alright to have a new beginning - to welcome the real you.',
    meaningReversed: 'One Page of Cups reversal meaning is that you are undergoing a block in your creativity. There are things or projects that you find interesting, but you seem to do them for other reasons than for the joy of it. You may be doing them for money, for fame, or something else. A reversed Page of Cups could indicate that you should remember the joy that your projects brought you in the first place to reclaim your imaginative spirit.Another Page of Cups reversal meaning is that it can symbolize a troubled person. One who is afraid of reality whether it’s emotional, financial, illness or something else. They find these issues difficult to face, perhaps leading to abuse of alcohol or drugs to escape. It could be an image of you or a loved one who is struggling with self-acceptance. The Page of Cups could indicate that someone lacks inspiration, they are battling low self-worth, and they are easily depressed. What can you do to help inspire them to be their best self?',
    meaningLoveUpright: 'The person represented by the Page of Cups tarot love meaning is someone who is intuitive, creative and emotional. They can often have an innocent and naive quality, regardless of their actual age. If this card doesn’t point to a person in your life right now, happy surprises could be in store for you. If you’re already in a relationship, you may be looking at it with fresh eyes, a sense of wonder and awe, and a newfound appreciation for the parts of your partner that you haven’t seen before. If you’re single, your approach to love can be one of childlike fascination. Everything about romance and potential partners can feel delightfully novel to you.',
    meaningLoveReversed: 'Shy, hesitant and maybe a little awkward, the Page of Cups tarot love meaning can point to someone in your romantic life with these characteristics. They may react well to some much needed kindness, slowly opening up to you if they feel safe. Sometimes however, this person may also be a bit emotionally immature; there could be temper tantrums, insecurity, and lots of nonsense. Should this card not represent a person, be aware of these traits in yourself. Have your insecurities gotten the best of you? How have they affected your romantic life?',
    meaningCareerUpright: 'The page of cups is an imaginative, sensitive and creative person, and in a career reading, they can often signal a focus on creative fields like art, fashion, poetry and music, or any field in which they can use their innate talent to create something. The page of cups can often have trouble putting their feelings into words, and thus, their creative outlets tend to be places where they can express themselves. They often have their head in the clouds however, so ensure that you are not simply daydreaming about your work goals, and are actually putting effort and taking action to make them become real. Follow your dreams, but make sure that they are well grounded in reality first.',
    meaningCareerReversed: 'Have you had issues dealing with your feelings at work? The page of cups can indicate that you have been unprofessional, or perhaps letting your emotions get the best of you. Oftentimes, when we are in new situations we may be faced with feelings that we don’t know how to channel into something positive. If your line of work is in a creative field, the reversed page of cups can also suggest that you’ve had a hard time dealing with creative blocks. This will pass too, if you can remember the reason you fell in love with doing what you did in the first place. Find inspiration.',
    index: 32
  },
  {
    name: 'Ten of Cups',
    description: 'On the Ten of Cups, there is a couple holding each other while facing a beautiful house and a green garden. Beside them, there are two children playing joyously. The couple is seen holding each other in a loving and romantic embrace, while the children are freely playing. The couple seems to be in a stable relationship, while also blessed with the abundance of a comfortable home and beautiful children. The green land signifies fertility, and the river shows how freely the feelings of the couple are flowing, meaning that their relationship is quite peaceful. Above in the sky, there are ten cups, shaped in an arc, which are meant to symbolize blessings from heaven. The rainbow behind them shows the end of hard times and sorrows, and a new happy life where each and every one of the family will enjoy. The Ten of Cups card depicts ‘having it all’.',
    keywordsGeneralUpright: [
      'happiness',
      'homecomings',
      'fulfillment',
      'emotional stability',
      'security',
      'domestic harmony'
    ],
    keywordsGeneralReversed: [
      'unhappy home',
      'separation',
      'domestic conflict',
      'disharmony',
      'isolation​'
    ],
    keywordsLoveUpright: [
      'commitment',
      'taking next step in relationship',
      'long term stability',
      'lasting relationship'
    ],
    keywordsLoveReversed: [
      'meddling relatives',
      'a short fling',
      'external forces affecting relationship'
    ],
    keywordsCareerUpright: [
      'feeling of belonging at work',
      'camaraderie between colleagues',
      'fulfilling and supportive job'
    ],
    keywordsCareerReversed: [
      'hostile workplace',
      'tensions between colleagues',
      'isolation at workplace'
    ],
    meaningUpright: 'From its joyful depiction, we can assume that the Ten of Cups embody happiness, joy, contentment and emotional satisfaction in your family, relationship or companion. It represents an idyllic state of comfort, harmony, peace and love which makes you feel like you are in paradise. This is where all your dreams, wants, needs and wishes have been fulfilled, and you feel a complete sense of satisfaction. Take a moment and breathe, look around you and be thankful for all your blessings. This card signifies something that so many of us are searching for.\n' +
      '\n' +
      "To see the Ten of cups is to indicate a true emotional fulfillment - one where the lonely self-satisfaction of the Nine of Cups is shared with others to create a true sense of community and family. It is the crystallization of the innocent will of the ace of cups. After learning how to love oneself, the Nine of Cups matured into the Ten of Cups, which at its core about how true happiness stems from forging authentic bonds and connections with others. This card is most associated with a sense of 'happily ever after' - of family, of lasting harmony and peace.\n" +
      '\n' +
      'This is an indication of harmonious family, for the card shows you that you are living in the perfect peace. No more adjustments or shifting is needed, you are in the right, just relax and enjoy your moment. In a love reading, this card shows that it is romantic, real and genuine - and has a strong potential for something long term. It deserves all your effort to make it come true.\n' +
      '\n' +
      'The Ten of Cups could also indicate a family holiday where you can relax and spend time with family members.',
    meaningReversed: "When the Ten of Cups is reversed, the strong bonds that one forges with family and community are broken, or twisted. The Ten of Cups is truly the most 'happily ever after' card, but somehow this idealized image of domestic peace and comfort is broken, or was unrealistic all along. Instead of connections, you may find distance. Instead of coming together, you may be pulling apart.\n" +
      '\n' +
      'Your hopes for happy times and special moments seem to not meet your expectations. You should learn to treat each other well, love each other and care for each other. This is the best way to ensure that you retain your harmonious living.',
    meaningLoveUpright: 'Love is calm and sweet with the Ten of Cups tarot love meaning. Spending time with your family can be particularly rewarding right now. You may be introducing your partner to your family, or taking the next step in your commitment together. The Ten of Cups tarot love meaning also suggests long term stability, tranquility and comfort. If you’re single, and you meet someone at this time, it’s likely that the relationship will be one that lasts.',
    meaningLoveReversed: 'Clashes between family and love can be suggested by the Ten of Cups tarot love meaning. External matters may be creating chaos in your romantic life, including meddling relatives that believe you are not meant to be together. It is important now more than ever to face criticisms from family as a unit; defend each other and avoid public arguments. Ensure that your partner feels loved even during this turbulent time. ',
    meaningCareerUpright: 'Though the ten of cups is often more connected to family than work, this card can also bring some joy to your career. This card can signify a kind of comfort and belonging that you find from your current position. There is enough opportunity for growth and creativity that you do not need to worry about these aspects of your career. There is also likely cohesion and happiness between you and your coworkers, and the office culture can feel welcoming and supportive. You may find that the job gives you a comfortable work-life balance as well, and you have the security of spending a good chunk of time with your family. The card can also signify retirement or leaving a job to take care of a family.',
    meaningCareerReversed: 'When the ten of cups is reversed in a career reading, you may be dealing with a feeling of tension, loneliness and frustration at work. The atmosphere is more hostile than usual, and your colleagues may not be supportive right now. You may be left with the feeling that you don’t quite belong in this position, and your basic sense of stability and security may feel shaken. Sometimes, this card can also signal an upset to your work-life balance. You may be working more hours than you expected and your family life is suffering as a result.',
    index: 31
  },
  {
    name: 'Nine of Cups',
    description: 'In this card, a middle-aged man is sitting on a wooden bench while his arms are crossed, and his face are showing quite a level of contentment. He is dressed elegantly and has the look of the true satisfaction. The head-dress on his head is red, and is a depiction of his active mind. At his background, you will notice there are nine golden cups, structured and arranged in an orderly manner. The Nine of Cups symbolizes a representation of fulfillment and success, both spiritually and materially. The man shows that expression of success after achieving his innermost desire.',
    keywordsGeneralUpright: [
      'wishes coming true',
      'contentment',
      'satisfaction',
      'success',
      'achievements',
      'recognition',
      'pleasure'
    ],
    keywordsGeneralReversed: [
      'unhappiness',
      'lack of fulfilment',
      'disappointment',
      'underachievement',
      'arrogance',
      'snobbery'
    ],
    keywordsLoveUpright: [
      'appreciating current love life',
      'positivity leading to romance',
      'cheerful romance'
    ],
    keywordsLoveReversed: [
      'lack of deeper connection',
      'superficial relationship',
      'inner work needed'
    ],
    keywordsCareerUpright: [
      'satisfying career',
      'recognition and respect at work',
      'avoid being overconfident'
    ],
    keywordsCareerReversed: [
      'dream job not what you expected',
      'career expectations not met'
    ],
    meaningUpright: 'After a long journey, the Nine of Cups symbolizes the finding of self-satisfaction. The emotional journey of the cups is starting to come to a close after the volatile ups and downs you faced in the earlier numbers of this suit. You have struggled to find purpose and joy after loss, you have tasted the different things that life offers, and you have left comfort in order to find greater heights. Here, you have found them, and you are indulging yourself as you celebrate this new stage of your life.\n' +
      '\n' +
      'When we look at the Nine of Cups, it can initially seem like one of the most pleasant cards that may appear during a reading. This is also referred as the wish card, which means that the things that you desire for, or your most perfect dream is bound to happen. The Nine of Cups is normally associated with extreme happiness and satisfaction. \n' +
      '\n' +
      'With regards to your work, there is a good change that something wonderful will happen in your workplace. It is time for you to push on your stalled project or if you have a something that you desire greatly, there is a possibility that you will finally achieve it. It also holds a positive meaning when it comes to love. Your romantic relationship with someone is destined to reach a new level. In case you are still single, this is the time to socialize with new people. In terms of finances, the Nine of Cups is also a positive messenger. It can mean that the financial state that you are hoping for will soon be achieved. In your health, the test that you have to undergo will lead to positive result. The good energy that you are receiving at the moment should be used to improve your health habits.',
    meaningReversed: 'When the Nine of Cups is reversed, you need to think more carefully about the things that you really want in your life. The Nine of Cups reversed can signify that you are looking for a more authentic feeling of fulfillment.\n' +
      '\n' +
      "Your path has been a hard one, and you've arrived at a period where you may have the appearance of fulfillment, but something else is missing. This may outwardly appear as smugness, and can indicate your desire to receive attention and recognition for all that you have achieved. But you personally still feel dissatisfaction in yourself - it seems as though your desires are never-ending, a black hole. Where does this stem from? In what parts of yourself are you lacking confidence?The Nine of Cups reversal denotes that it is time for you to stop placing a value on all your blessings, and instead pay attention to the quality of your life. The true treasures lie in your relationships with your family, friends, and community.",
    meaningLoveUpright: 'Appreciate what you have when the Nine of Cups appears in a love tarot reading. Wishes here are meant to come true, and it is best to look forwards to the future with gratitude. There is much to celebrate, and if you’re single, love can be found at parties and other happy gatherings. Go and enjoy yourself; now is not the time to be calculating or strategizing about your goals, but instead simply have fun. Lightheartedness can draw others to you. If you’re in a relationship, you’ll find that your love life will feel more cheerful and sweet. This can be a great moment to feel closer with your partner.',
    meaningLoveReversed: 'With the reversed Nine of Cups tarot love meaning, you may find that you your relationship ticks all the boxes, and looks great on paper, but it still feels as though something is missing. Perhaps you and your partner haven’t been as close as you would have wished; maybe there is a lack of a deeper connection. There’s no reason to fret, as this can be solved with earnest and intimate conversation. On the other hand, you may have been so wrapped up in getting into a relationship, that you haven’t noticed that it was you that needed to grow. Sometimes, we can get into a romance in order to distract us from the inner work that we must do in order to be happy. Without doing that inner work, regardless of the wonderful romances that come our way, that dissatisfaction will always stay.',
    meaningCareerUpright: 'When it comes to your career, the nine of cups signifies that you may be able to find respect and recognition in your field. Whatever projects you start now may be easy to finish, and the skill you demonstrate in completing them can also earn you much praise. If you’re looking to advance in your career, this can be an excellent time to ask for a raise or promotion. People will likely be more receptive to these requests now than in the past or, potentially, in the future. Take advantage of this moment. Overconfidence is never wise, but do not be shy or bashful now. You have worked hard for this recognition. ',
    meaningCareerReversed: 'The reversed nine of cups can be an upsetting card for your career. As the upright card is considered the “wish card” of the tarot, in reverse, it can signify that something you’ve always dreamed of is quickly not turning out like how you imagined. You might have hoped that by opening a business or starting this new job that everything would be better, when the reality is as far from this as you could imagine. You may find that the work is harder, more tedious, or simply too much to handle. There may also be a lack of rewards, you may not be recognized for your efforts. Instead of feeling overjoyed about your new career path, you may instead feel disillusioned and disappointed. You may need to go back to the drawing board to make some changes.',
    index: 30
  },
  {
    name: 'Eight of Cups',
    description: 'In the Eight of Cups, we are confronted with the moment of transition. We see a cloaked figure taking off to a barren land leaving behind eight golden cups. He is tired of what those cups that he has spent so much time collecting, and is now setting out to seeking a higher purpose. It may be a result of a boredom or unhappiness that comes with realizing that whatever they have been looking for in life isn’t as pleasurable or as satisfying as they once assumed it would be.The person undertaking this journey might also signify be seeking excitement in the unknown. The mountainous barren lands that he sets off to can also be symbols of facing new challenges. Their stark emptiness seem to indicate that they are waiting for one to come and shape the. The journey that is taken can be done in the guise of trying out new things that have the potential to help one grow both mentally as well as spiritually. It also shows the willingness to detach oneself from others so that one can work on self-improvement, self-understanding and growth.',
    keywordsGeneralUpright: [
      'abandonment',
      'walking away',
      'letting go',
      'searching for truth',
      'leaving behind'
    ],
    keywordsGeneralReversed: [
      'stagnation',
      'monotony',
      'accepting less',
      'avoidance',
      'fear of change',
      'staying in bad situation'
    ],
    keywordsLoveUpright: [ 'leaving unhappy relationship', 'abandonment issues' ],
    keywordsLoveReversed: [ 'staying in a bad relationship', 'fear of being alone' ],
    keywordsCareerUpright: [ 'leaving unfulfilling job', 'taking vacation', 'escapism' ],
    keywordsCareerReversed: [ 'accepting unfulfilling job', 'fear of change' ],
    meaningUpright: 'The Eight of Cups signifies time for change or transition, by means of walking away from something. Just like a caterpillar has to die before transforming into a beautiful butterfly, we all need to transform ourselves in our lives from time to time. This is the case especially after being tired of living what was the day to day, and embarking on a journey that will help one have a deeper understanding about life in general.Getting the upright side of this card shows that you are dissatisfied with your life and need to experience a higher purpose in life. You may have been exploring your options, flitting about from one choice to another, tasting the wine in each cup, as a means to sort out what it is that you really want with your life. You are now experiencing a feeling of exhaustion - and are coming to a realization that you must step away from what is familiar. It is a choice, and a recognition that true happiness will not be found in what you have already created. \n' +
      '\n' +
      'More often than not, getting the Eight of Cups shows that one is tired of the worldly things and is about to embark on a much more spiritual journey. And if that’s the case, then be happy, because change happens when we most need it.',
    meaningReversed: 'Getting the reversed Eight of Cups can show that one is in a state of confusion about which path they are supposed to take. The confusion usually arises from not knowing what is best for you and in the end, drifting in a sea of uncertainty is going to be the resulting effect. One is likely to find themselves being aimless and not having clear cut goals in their lives. And in the end, they almost always end up following wherever the waves of life take them.\n' +
      '\n' +
      "On the other hand, you may be aware of what you need to do. There is something that in your life that has for a long time stopped bringing you joy or pleasure, and though your soul's desire is to fly away from it, you find yourself remaining. The thought of leaving the security of what you have built fills you with fear - you are scared of both change and of losing something that has given you great comfort. \n" +
      '\n' +
      'Most people usually find themselves stuck in limbo because they are stuck between two important decisions. For instance, one might want to change and work on themselves for the better, and at the same time, they may not in a position to make the necessary sacrifices that are necessary in order to achieve. We must have courage, to believe that we deserve better, that there are even more joyous things that are awaiting us if we take this journey.',
    meaningLoveUpright: 'Take some time to ask yourself whether your relationship is one that you are happy with. The Eight of Cups tarot love meaning indicates that there is often some soul-searching that needs to be done about whether your partnership is one that truly fulfills you. Can you imagine spending the rest of your life with this person? Do they encourage you to be your best self? Do they encourage you to grow? Or instead are you with them because you are scared of being alone, or going back into the dating scene again? This is unfair for both you and your partner. It takes a lot of courage to look honestly within and answer these questions, as well as to walk away from a life that the two of you have built together.',
    meaningLoveReversed: 'With the reversed Eight of Cups tarot love meaning, your gut may be telling you that you need to leave your partnership, but there is something that holds you back. It is important to engage this and question that fear. It is so very difficult to give up what has been built, the time and emotions and energy that we have invested into another person, but sometimes one must be wise enough to leave something that truly isn’t working behind. You’ll have to work out whether the desire to leave comes from the relationship truly reaching its end, or whether it is still salvageable. Give yourself time to get a clear head about what you need to do, and address whatever it is that prevents you from moving on.',
    meaningCareerUpright: 'The eight of cups in a career tarot reading can signal several things. Since the card in a general sense signals walking away and leaving something behind, it could be as simple as you taking a vacation from work, or as stressful as walking away from an unfulfilling job. If work has been especially draining recently, just a little escapism might help you feel refreshed. If you’re trying to make the decision about whether or not to leave your job, remember that sometimes you have to know when to cut your losses and move on. If you know how to make the most of any situation and make responsible decisions, it will offer you an exit to bad situations in favor of better ones.',
    meaningCareerReversed: 'When the eight of cups is reversed, you may be finding it difficult, or even downright refusing to do walk away from something out of fear. You may feel that you are in an unfulfilling career, which you have the power to change. You can choose to either accept a role that offers you no emotional reward, creative outlet, or opportunity for growth, or make the necessary changes to look elsewhere. Do not be afraid of leaving something behind if it is no longer serving you. This task is true for those who own their own business as well. If you are holding on to your business or job out of a sense of duty or fear, now is the time to let go.',
    index: 29
  },
  {
    name: 'Seven of Cups',
    description: 'The Seven of Cups symbolizes imagination, choice, wishful thinking, illusion and fantasy. The card shows person with their back turned towards us, contemplating 7 images that are creeping out of the cups, all of which are floating in the clouds. Clouds are a representation of dreams, illusions, thoughts and imagination. There are numerous fantasies that are appearing from the cups, which are representative of the many visions that one sees while dreaming. The Seven of Cups may imply that you have a number of options to choose from.',
    keywordsGeneralUpright: [
      'choices',
      'searching for purpose',
      'illusion',
      'fantasy',
      'daydreaming',
      'wishful thinking',
      'indecision'
    ],
    keywordsGeneralReversed: [
      'lack of purpose',
      'disarray',
      'confusion',
      'diversion',
      'distractions',
      'clarity',
      'making choices'
    ],
    keywordsLoveUpright: [
      'choosing between lovers',
      'be cautious about romantic decisions'
    ],
    keywordsLoveReversed: [
      'chaotic and confusing love life',
      'avoiding romantic decisions',
      'clarity about love'
    ],
    keywordsCareerUpright: [ 'many career options', 'make a choice and stick to it' ],
    keywordsCareerReversed: [
      'lack of career options',
      'missed opportunities',
      'creating clear career vision'
    ],
    meaningUpright: 'To draw the Seven of Cups in a reading shows that you need to clearly see the shadows and visions in your imagination, not only in your dreams but also in the real world. You should be careful of wishful thinking and be alert of the choices that you make. In one sense, the Seven of Cups indicates that you are a dreamer who is both excited and afraid of the things that you see in your unconscious. In another, the Seven of Cups is a reminder that although it is good to have dreams and wishes, it is even better to take action attaining those dreams. At one point in life, you will need to stop fantasizing and face the reality of life.If you are unable to make a decision due to the many options that are available, you should evaluate the advantages and disadvantages of each option so as to make the best choice. It is important to exercise caution when you are making your decision, as the card itself seems to show there is not only wonders and treasures that are available to you, but also monsters and shadows.\n' +
      '\n' +
      'There are some cases when the Seven of Cups may show that you are living in ways that are not necessarily grounded in real life - that your actions are guided by illusions that you feed yourself. Your ideas may be so up in the clouds, developed only on your imagination. As such, you will need to separate what is real and what is not so that you can make better choices.\n' +
      '\n' +
      'The Seven of Cups is also linked with temptation. This applies in the upright meaning and also the Seven of Cups reversal meaning.',
    meaningReversed: 'The Seven of Cups reversal is somewhat similar to the upright, as they both indicate dreams, illusions and temptations, but seem to emphasize the more negative qualities of this card. Your views may be inclined towards fantasy, and not grounded in reality. It may imply that you are unclear about the things that you are searching for.The Seven of Cups reversed may also demonstrates your unwillingness to face the realities of life, and you are seeking to escape through imagination and daydreaming.\n' +
      '\n' +
      'On the other hand, the Seven of Cups reversed may also indicate an end of confusion, of cutting out illusions, and moving forward with clarity.',
    meaningLoveUpright: 'Several decisions lie ahead of you with the appearance of the Seven of Cups in a love tarot reading. If you are single, you may have to make a decision between different lovers, or perhaps between love and family, or love and career. The Seven of Cups tarot love meaning can also signal that all the choices may look tempting right now, but though they glisten with promise, they may be illusions. Take your time and consider things carefully; only diligent communication and evaluation will give you what you desire. With love, we may be tempted to rush into a situation, letting lust and infatuation guide us towards something that in the long run won’t last. It is important to think of all the options, as well as look into any red flags or gut feelings of “something is wrong”, you may feel about the relationship. Trust your instincts.',
    meaningLoveReversed: 'Your lack of clarity about what you want in love can make your love life even more confusing and chaotic than it needs to be. There can be wasted time, missed opportunities, emotional upheavals, all because one is unable to make a choice. Your dating life can be filled with dead ends, broken hearts, and mixed messages. It is important to remain focused on what you want, instead of letting the world make your choices for you. Alternatively, if you are developing some awareness of what is important to you, taking action on those decisions can be rewarded. You can now take the steps you need to make things happen.',
    meaningCareerUpright: 'The seven of cups depicts a person confronted by a variety of options. If this card appears in relation to your career, you may be presented with many different ways you can advance at work. This plurality of options is generally a good thing, but it may be important to be wary about how much time you spend dreaming about something instead of taking steps to make it happen. Remember, a potential path is only as good as the steps you are willing to take down it. You have plenty of ways to make progress in your career, and they can all serve you well. But none will get you what you desire if you don’t choose one path and commit to it. Whatever you end up deciding will serve you well; so, act decisively and with confidence.',
    meaningCareerReversed: 'While the upright seven of cups represents a plethora of options, the reversed seven can signify the opposite. It often appears to people who feel as if they are stuck in their job with no opportunities to advance. It is also common for those who feel as if they realized too late that the perfect position was available to them but they failed to act in time. Regardless of if either (or both) applies to you, try not to get hung up on these negative emotions. This card also represents a clear vision in terms of your career goals. Use these skills to honestly assess your position and where you have fallen short. Ask yourself what you could be doing to more proactively make progress in your career.',
    index: 28
  },
  {
    name: 'Six of Cups',
    description: 'The Six of Cups symbolize the joy of nostalgia, the comfort of home and childhood innocence. In the card itself, there are six cups filled with white flowers. Two children are depicted in the foreground, and one is passing a cup to another. This handing of the flowers from the boy to the girl shows the passing of traditions and happy reunions. The children seem to be in a castle of sorts, that we can imagine give them a sense of security and comfort.',
    keywordsGeneralUpright: [
      'nostalgia',
      'memories',
      'familiarity',
      'healing',
      'comfort',
      'sentimentality',
      'pleasure'
    ],
    keywordsGeneralReversed: [
      'stuck in past',
      'moving forward',
      'leaving home',
      'independence'
    ],
    keywordsLoveUpright: [
      'reconnecting with ex',
      'reliving happy memories',
      'healing after breakup'
    ],
    keywordsLoveReversed: [
      'unable to move on',
      'clinging to past loves',
      'failure to live in present'
    ],
    keywordsCareerUpright: [
      'returning to previous work',
      'not repeating past mistakes',
      'learning career lessons'
    ],
    keywordsCareerReversed: [
      'leaving comfort of job',
      'staying in stale job',
      'repeating negative patterns'
    ],
    meaningUpright: 'The Six of Cups upright generally represents generosity, naïve happiness, and childhood. It can stand for you wanting to return to a happier time, whether it was when you were a child, teenager, or young adult. Many times, these memories are things of the past, which reflect the aspects of ourselves that have vanished. You may feel that remembering these times is the only way to feel happy. The Six of Cups appearing in a reading seems to indicate that while we may look upon the past with a happy eye, we must avoid living in it.\n' +
      '\n' +
      'The Six of Cups can also mean that you are be returning to a familiar place. This could be your hometown, an old friend’s home, a school, or any place that holds a lot of meaning for you. You are seeking to reconnect with people from your past. Bringing back old memories reminds us of our childhood, a time when things were simpler.\n' +
      '\n' +
      'Coming after the Five of Cups, this card can also suggest that you may have suffered a loss or disappointment of sorts, and you are making the journey home. You are looking to the past to find the answer to the crisis or challenge that you are facing now. You may be seeking the comfort and warmth of people that unconditionally love you, gathering strength to face the trials that are in front of you.',
    meaningReversed: "The Six of Cups reversed can mean that you are clinging to the past. You should explore your memories, but you should not allow yourself to remain there. While you may find it comforting to be in the security of home, you must also learn to forge your own path. The past should be used as a guide for the future. Learn to focus on the present, and truly be aware. Another reading of the Six of Cups reversed is that you may feel as though you are disconnected from your childhood self, and that child's dreams, which may sometimes be unrealistic. Not reaching these goals can be painful, but sometimes reality carves a path for you that you must follow, and you shouldn't blame yourself for your choices. Take the time to think about where you want to be now and how you can reach your goals, instead of just dreaming about them.",
    meaningLoveUpright: 'The past comes alive again with the Six of Cups tarot love meaning. This card can signal a revival of the past and the nostalgia that comes with it; you may be exploring happy memories, you may be more appreciative your partner’s sense of familiarity, or an ex can even reappear in your life again. The Six of Cups can also represent a time of healing after wounds, and comfort may be important to you now. If you and your partner have had a stressful period in your relationship, looking backwards at the great times you spent together, and perhaps reliving them, can bring you great comfort. Beware however, of living only in the past. Let the past nourish your future; they are lessons to show you what you want to remain in your life, and what you wouldn’t.',
    meaningLoveReversed: 'You may be living in the past instead of the present, with the reversed Six of Cups tarot love meaning. It is likely that a past relationship has been limiting you from opening yourself to love and making room in your heart for someone else. You may believe that you will never meet someone like your ex again, or that the love you once had was something of legend. It can be rather unfair for current or potential partners to be with someone who lives this way. Exes are exes for a reason; you may be only seeing the happy memories, and not the tumultuous ones. Let the past go. Otherwise you may be blocking out all possibility of love again, and you may never know whether the love that you are meant have was even greater than the one you lost.',
    meaningCareerUpright: 'The six of cups often represents childhood, memories, and healing. When it comes to your career, now may be a good time to look backwards on the path that got you here. This card can be a signal that your past work can hold great lessons you need to learn for building your future. Think back on what you did right, as well as ensure that you aren’t repeating mistakes from your past. Alternatively, this card can signal that you may be reconsidering your career path, and perhaps returning to a position that you had once left.',
    meaningCareerReversed: 'The reversed six of cups can suggest that your work has become stale, and that progress in your career has perhaps stalled. You may be so frustrated from this stifling atmosphere that you are in the process of searching for a more exciting position or field of employment. There can be the desire to leave the security and comfort of your current position. Alternatively, you may be choosing to remain in the comfort of your current position to avoid the risks of searching elsewhere. In general, there is an important lesson that needs to be learned when this card is in reverse. Beware of repeating any negative patterns that may have followed you in your past workplaces; regardless of where you go, your own behavior often can recreate the same problems again if it is not dealt with. ',
    index: 27
  },
  {
    name: 'Five of Cups',
    description: 'There are certain Tarot cards whose imagery immediately conjure up negative emotions, and the Five of Cups carries such weight. This is a card which signifies loss as well as the painful challenges which stem from that particular loss. The card depicts a figure that is wearing a black cloak. The person hides his face in what seems to be despair. There are five cups on the ground, three of which have fallen while the other two remain standing. The person, however, seem to notice that there are two standing cups as is too busy mourning over those which are fallen. There is a powerful river which flows between him and a house or a castle in the distance, indicating that a torrent of emotions have separated him from home.',
    keywordsGeneralUpright: [
      'loss',
      'grief',
      'disappointment',
      'sadness',
      'mourning',
      'discontent',
      'feeling let down'
    ],
    keywordsGeneralReversed: [
      'acceptance',
      'moving on',
      'finding peace',
      'contentment',
      'seeing positives'
    ],
    keywordsLoveUpright: [
      'grieving break up',
      'time of tension and sadness in relationship'
    ],
    keywordsLoveReversed: [ 'moving on from past relationship', 'healing from old wounds' ],
    keywordsCareerUpright: [
      'taking a step backward in your career',
      'job loss',
      'business loss'
    ],
    keywordsCareerReversed: [
      'job loss leading to better position',
      'healing from career misstep'
    ],
    meaningUpright: 'The Five of Cups symbolizes disappointment, and the feelings that come when things go differently as you expected. You are feeling unhappy that a certain situation hasn’t really turned out the way you have hoped it would. Instead of moving towards a more positive perspective, this card seems to say that you are dwelling in the past, inducing feelings of self-pity and regret. The water which is actually spilled from the cups shows that you might have missed an opportunity. It also shows that the problem is mostly emotional and not material or financial.\n' +
      '\n' +
      'The meaning of the Five of Cups shows that you may have certain issues letting go of things which are in the past. What is more, it also shows that you are unwilling to learn from mistakes that you have already committed. The card is often going to reflect a person who is so caught up in his past that he is absolutely incapable of moving on. This means that he has a high chance of missing out on what new joys that the future can bring.',
    meaningReversed: 'When the card is reversed, the Five of Cups shows a significant recovery from the regret as well as proper acceptance of your past. You are beginning to realize all of the implications of your actions, and you have finally come to appreciate the lessons which can be learned from that experience. You may even start to recognize the overall value of the painful experience you had in the larger scheme of things. You are seeing that the suffering and grief that you endured gave you strength and imbued you with resilience. You are ready to pick up the two remaining cups which are still full and go on with your life in full force.',
    meaningLoveUpright: 'You may be going through a period of mourning right now; there is perhaps much to grieve over. You perhaps are going through a break up of some sort, or if not that, a time of tension and arguments with your partner. It is helpful however, to understand that not all is lost. The Five of Cups tarot love meaning signals emotional loss, but also that you may be overlooking what is still salvageable, and what has survived. Oftentimes, these bring the seed of hope. Did an argument teach you about something in your relationship? Did it help foster communication that would have otherwise remained silent? Did the break up bring you freedom to explore your individuality beyond your past relationship? As much as there are things to mourn over, the Five of Cups tarot love meaning also suggests that there are things to look forward to.',
    meaningLoveReversed: 'It is time to stop living in the past, when the reversed Five of Cups appears in a love tarot reading. This really is the card of moving on, of letting go of past grief and suffering. If you’ve recently gone through a break up, this card can be a welcome sight to help motivate you to accept what has happened, and make peace with it. As this chapter closes in your life, you are making room for new love to appear, one where truly live in the present, and are not comparing current potential romances with your past. If you’re still healing, it’s only natural. Give yourself time, and be gentle; you will find happiness again. If you’re already in a relationship, you may have just gone through a tense period. Hopefully, you and your partner will have had all the discussions you needed in order to feel like you are both understood and heard. Try not to dwell on past hurts and resentments; look towards the future and what the two of you can change, instead of what you cannot.',
    meaningCareerUpright: 'The five of cups signifies loss and grief. In the context of your career, this can take place in the form of a loss of a job, business, a coveted project, or partnership. Perhaps you are being forced to take a step backwards in your career. Or it may be that someone with whom you work might abandon the projects you shared, or you may choose to walk away instead. This may be a period of sadness and transformation. These changes are hard, but they offer a learning opportunity. There may be more to salvage than what you initially thought. Try to maintain positive relationships with old coworkers outside of the office. Stay connected to the best elements of what you lost. ',
    meaningCareerReversed: 'The reversed five of cups is a sign of recovery. When it comes to your career, if you’ve recently suffered a setback like a loss of a job, a layoff, or had a business go underwater, the reversed five of cups suggests that you have what you need to in order to move past these terrible times. You are able to recoup some of your losses now. Healing is on the way; you may realize that despite the suffering that you experienced, these losses allowed you to find a position that was much better suited to you. It is also likely that the stress and pain you have been experiencing as a result of these troubles will start to weigh on you less heavily. ',
    index: 26
  },
  {
    name: 'Four of Cups',
    description: 'The Four of Cups displays a young man sitting under a tree on a mountaintop, far from others. He seems to be in contemplation and meditation. In front of him are three cups laying on the grass while another cup is being offered to him by a hand in the air. The man has crossed his hand and legs, and he is looking down at the three cups, unimpressed, such that he cannot see the cup being presented to him by the stretched arm.\n' +
      '\n' +
      'The Four of Cups represents our tendency to take for granted the things that we have, making it hard for us to see what treasures the universe presents us with. We tend to have the answers to our troubles right around us, but we tend to focus too much on what we do not have.',
    keywordsGeneralUpright: [
      'apathy',
      'contemplation',
      'feeling disconnected',
      'melancholy',
      'boredom',
      'indifference',
      'discontent'
    ],
    keywordsGeneralReversed: [
      'clarity',
      'awareness',
      'acceptance',
      'choosing happiness',
      'depression',
      'negativity'
    ],
    keywordsLoveUpright: [ 'bored with love life', 'lack of excitement in relationship' ],
    keywordsLoveReversed: [ 'being more active in love', 'new understanding of love' ],
    keywordsCareerUpright: [
      'bored with job',
      'feeling unhappy with job or career',
      'lack of progress'
    ],
    keywordsCareerReversed: [
      'new inspiration or creativity',
      'realizations about career',
      'adjustments'
    ],
    meaningUpright: 'The Four of Cups tend to appear when you are feeling discouraged and unmotivated. You may feel as if there is no solution or way forward in your situation. Life has become stagnant, and nothing seems to make you happy or passionate. You are feeling apathetic - regardless of what happens, whether the day is good or bad, none of it matters to you. The Four of Cups commands a self-evaluation of your attitude so that you can pull yourself out of this rut. The solution is likely right in front of you, the hand is offering you a way out, but you release yourself out of your mental stubbornness and deploy new approach.\n' +
      '\n' +
      'You must search your motives, instincts and thoughts so that you can find your passion again. The Four of Cups revolves around finding your true interests and working towards fulfilling them. Our lives are short, and sometimes monotonous, but we must create meaning for ourselves. Our individual callings are not just there for us to find, but to decide and to imagine. ',
    meaningReversed: 'While in the upright four of cups, you may be suffering from apathy and ignore the opportunities that the universe offers you, the reversed four of cups signals the desire to have a new start.\n' +
      '\n' +
      'The sudden awareness of the transient beauty of life may strike you now, while previously you may have been too deeply disconnected from yourself to see it. You are coming to the understanding that though life is not perfect, there is beauty in it, and joy comes from choosing to see this beauty.\n' +
      '\n' +
      'Embrace new ideas, new people and new places; because you never know where these adventures can take you. Many may miss these chances because they are too confined in their own beliefs and ambitions.',
    meaningLoveUpright: 'If you’re single, the Four of Cups tarot love meaning suggests a time of feeling boredom or indifference regarding your love life. Sometimes, this can come naturally after a break up, but one must make sure that this doesn’t come from unconsciously attempting to protect yourself from possible pain and suffering that love has brought you in the past. Opportunities come when you are open to seeing them, and right now you can’t be bothered. Should you already be in a relationship, there can be a lack of interest and weariness in your relationship. Excitement has faded and you may feel more like roommates than lovers. Sometimes this requires only some exploration and willingness to experiment. Without some effort from both partners, the relationship may be nearing its end.',
    meaningLoveReversed: 'You may be exiting a time of withdrawal and contemplation with the reversed Four of Cups tarot love meaning, and you may be becoming more active in your romantic life again, this time, with a better understanding and appreciation for what it brings you. If you are recovering from a breakup, you may be just starting to let go of past suffering, and the future seems full of promise. Be excited for what the future brings you. With a better understanding of what you want and who you are, the potential loves that you encounter now can be refreshingly different. ',
    meaningCareerUpright: 'If you see the four of cups in a tarot reading about your career, you may feel distracted and distant at work. It might be hard to focus on the tasks at hand or get excited about projects. This boredom can also be impacting your mood negatively. You might feel down on yourself and thus find it even harder to be productive. None of this is aided by the overwhelming stagnation you probably feel. This stagnation might be the root of the issue. It can be hard to focus if you feel you are going nowhere. It may be helpful to take some time to detangle this issue; looking inward and knowing what makes you feel so unhappy and doing something about this can help you make a change for the better.',
    meaningCareerReversed: 'When reversed, the four of cups can signal an end to the stagnation you’ve been experiencing at work lately. This change might be sudden. It could feel like a revelation of sorts or as if a fog has lifted. You might find that your creativity has suddenly returned. As a result, you will be about to move forward in your work projects using this new found sense of inspiration and creativity. If your new realizations about your career are telling you that you need to make a change, now would be the time to do so. While the changes might be fast, do not mistake it for luck. You will still need to harness your newfound energy. The universe won’t give you anything unless you take action, but opportunities you did not previously consider or notice can suddenly take the forefront in your career. ',
    index: 25
  },
  {
    name: 'Three of Cups',
    description: 'When you draw the Three of Cups, you will see three women lifting their cups up in the air in a celebration of some sort. Good times are in the air, for the three ladies have wreaths made of flowers in their hair. Wreaths are often associated with success and victory, so their happiness is well deserved. The ladies are also seen standing on top of a field of flowers and fruit, further adding to the joyful feelings in this card. There are feelings of beauty, growth, compassion and happiness that the women share between each other.\n' +
      '\n' +
      'An interesting note though, in the Rider-Waite the woman in the middle is turned away from the reader and her face hidden from view. However, the two other maidens are seen smiling.',
    keywordsGeneralUpright: [
      'friendship',
      'community',
      'gatherings',
      'celebrations',
      'group events',
      'social events'
    ],
    keywordsGeneralReversed: [
      'gossip',
      'scandal',
      'excess',
      'isolation',
      'loneliness',
      'solitude',
      'imbalanced social life'
    ],
    keywordsLoveUpright: [
      'friendship turning to romance',
      'social gatherings leading to romance'
    ],
    keywordsLoveReversed: [
      'short but exciting romance',
      'third party coming in between you'
    ],
    keywordsCareerUpright: [
      'planning a celebration at work',
      'happy and joyous office environment'
    ],
    keywordsCareerReversed: [
      'work events not going as planned',
      'destructive office environment'
    ],
    meaningUpright: 'The meaning behind the Three of Cups represents a period of happiness. You will be able to forget the worries of your daily life and spend quality time with family and friends.\n' +
      '\n' +
      'To see the Three of Cups can indicate a happy reunion with a long lost friend, relative, or loved one. It can also mean a celebration, whether it is your own or for someone who you love. The event can be a birthday, wedding, or any other happy occasion. In general, it is about spending quality time with people you cherish in your life. \n' +
      '\n' +
      "The three maidens represent your circle of friends who you turn to for love, compassion, and support when you need them the most. It can be old college buddies, colleagues at work, or people you have shared a special bond over the years. If you've had problems with your social life, this card can signal the end of those hardships. You will be able to resolve differences and learn how to deal with the problem.",
    meaningReversed: 'When the Three of Cups is reversed, it means that you may have no time to socialize or go out with friends. You may be too busy with school or work that you can’t spare some time to have fun. The Three of Cups reversed can also mean losing touch with some of your friends. As time passes, you may find that you are growing apart from one another. When we grow older, we must put in effort to make sure that our friendships are not neglected.\n' +
      '\n' +
      'Alternatively, the Three of Cups reversed can mean that there is a lack of balance and harmony within your social circle. Gossip and scandal can rear their ugly heads. Perhaps there is envy hidden within this circle, and as a result, you are feeling isolated. ',
    meaningLoveUpright: 'The Three of Cups tarot love meaning signals celebrations, friendships, and gatherings. If you’re single, you may have luck finding love in your social life. A close friendship may also turn into romance. If you’re already in a relationship, social gatherings will bring the two of you closer together. When you go into the world together as a couple, it may make it easier to see just how well the two of you get along together. Being around friends and family can have a strong effect on the two of you, reminding you of why it is you two have chosen each other. Your love can feel deep and gratifying now.',
    meaningLoveReversed: 'Should you be single, the Three of Cups tarot love meaning indicates that your romantic life may be fun and exciting, but perhaps short lived. Relationships started at this time can quickly fizzle once the two of you get to know one another better. If you’re already in a relationship, be wary of any third party that is trying to do harm to your partnership. Sometimes, this can come in the form of nasty gossip, or perhaps someone attempting to insert themselves between the two of you.',
    meaningCareerUpright: 'The three of cups signifies celebrations in all aspects of your life. If it appears to relate to your career, it may be that a number of work-related events are on the horizon. These parties will be joyous occasions. These can take many forms. You may be celebrating a graduation, a change in position or a promotion. If you are launching a business and planning a release, these events are likely to go particularly well. Outside of these engagements, your office environment can be very positive right now. You might find that group work and collaboration is easier now that it has been in the past. It is a good time to enjoy these celebrations and supportive relationships.',
    meaningCareerReversed: 'When reversed, the events and celebrations that the three of cups normally represents may not go as planned. If you were planning a launch or other event, it might happen but will not bring the success and result you intended. Sometimes, this card can signal that these events will be delayed or canceled. If none of these situations apply to you, it may be likely that your work environment can be particularly toxic right now. There is likely gossip and other forms of undercutting that are destroying the camaraderie. There may be conflicts all around; some of this may be directed at you, but you may also simply have to deal with being caught in between the crossfire. Try your best to not be a part of this negativity. Do not add fuel to the fire as it will only burn you in the long run.',
    index: 24
  },
  {
    name: 'Two of Cups',
    description: 'This card shows an image of a man and a woman that are exchanging their cups in a ceremony. There is the symbol of Hermes’ caduceus in between which is often related to negotiation, trade, cosmic energy, protection, proper conduct, and duality. The Two of Cups refers to something quite positive, for it is one of the most auspicious cards in the tarot for relationships, whether romantic, business or otherwise. It suggests a new partnership is in the works, and it will be created with balance, respect, and honor. Above the caduceus is a chimera, which symbolizes fire and passion also governs this partnership.',
    keywordsGeneralUpright: [
      'unity',
      'partnership',
      'attraction',
      'connection',
      'close bonds',
      'joining forces',
      'mutual respect'
    ],
    keywordsGeneralReversed: [
      'separation',
      'rejection',
      'division',
      'imbalance',
      'tension',
      'bad communication',
      'withdrawal'
    ],
    keywordsLoveUpright: [
      'starting a relationship',
      'mutually beneficial relationship',
      'working together as a team'
    ],
    keywordsLoveReversed: [
      'relationship imbalance',
      'codependency',
      'uneven power dynamics'
    ],
    keywordsCareerUpright: [
      'good relationships with colleagues',
      'helpful business partnership'
    ],
    keywordsCareerReversed: [
      'bad business partnerships',
      'tension and conflict with colleagues'
    ],
    meaningUpright: "To see the Two of Cups is an indication of a partnership that is built on the union of forces, a strong connection and a balanced and equal partnership. The exchange of cups suggest that each party's emotions are intertwined with the other's, and each participant's feelings have profound affects on the other. A strong pair is indicated here, the joy of two becoming one.\n" +
      '\n' +
      'When it comes to work, you may notice that the people around you will start to appreciate you more. There is a mutual respect here, meaning you will also be more comfortable in your workplace. If you are looking for new job opportunities, this card may be a good sign. In terms of love, the card represents commitment, a balanced relationship, and love. But this does not simply mean that you will no longer need to nurture your love to make it last. The card only signifies that true love and affection is present.In your finances, the Two of Cups is associated with fairness and balance. This means that you are currently financially capable and you have the right amount of money to deal with your obligations. In relation with your health, people who are currently facing some health issues need to look for a practitioner that they will be comfortable working with and whom they can trust. In spirituality, it is a call for you to be more endearing and loving towards the others. You are receiving positive energy from the universe, and you need to share that energy.',
    meaningReversed: 'When reversed, the Two of Cups can mean that the balance that was once there is broken. This balance was an integral part of keeping the individuals together, but to break it is to create disconnection and discord. The negative energy of two forces is present, and instead of them joining or attracting, they seem to repel each other.\n' +
      '\n' +
      'You may be finding that certain small details that were not problems before are coming into play, signaling that one party may have resentments. A line of communication that allowed you and the other party to openly talk about disagreements has been cut off, only worsening the cycle of resentment and imbalance.\n' +
      '\n' +
      'Be the first to open up, and you may find the problem much easier to repair than you thought it would be. ',
    meaningLoveUpright: 'Attraction and coming together is signaled by the Two of Cups tarot love meaning. This card encourages the beginnings of partnerships of any kind, and the harmony that arises when two people come together to work in unity. This card also suggest a relationship that is mutually beneficial, one where the partners encourage one another to do their very best. If you’re already in a relationship, you may find that this time brings better communication, balance and amicability. You may be able to better cooperate at this time. Try and be aware of your partners and your own talents; give each other trust to do things that are your strengths. The Two of Cups is all about partnerships that build up each individual person, while being together.',
    meaningLoveReversed: 'Something isn’t quite right when the reversed Two of Cups card shows up in a love tarot reading. Either the two of you are becoming too co-dependent on each other, unable to develop each person’s unique talents, or the balance between two partners can be upset with uneven power dynamics. If you’re in a relationship, always make sure to nurture your own and your partner’s individuality; the two of you are different people, with different interests and needs. Being who you are, on your own, will bring more to the relationship than if you were identical to your partner. Sometimes, this card can also point to the pursuit of love at the expense of all else.',
    meaningCareerUpright: 'The upright Two of Cups is strongly associated with positive relationships, meaning that when it comes to your career, you may find that your relationships with your colleagues or business partners can be particularly strong right now. You may find support and harmony in the people around you. It should be especially comforting to those who were debating starting a business partnership. The card signifies that this new partnership will be fruitful and that you will work well together. Oftentimes, the two of cups is associated with romantic relationships, but this is very rarely applicable to the career setting, but if you have recently been interested in someone you met through work, it can also signal happiness in that relationship as well. Just be aware of the risks when it comes to mixing pleasure and work.',
    meaningCareerReversed: 'While the upright two of cups is indicative of strong, positive relationships, the opposite is true of the reversed two of cups. If you are in a business partnership, you may be dealing with diverging interests, conflicts or a lack of respect. If you do not yet have a partnership but were looking to form one, this is a warning to be cautious.The other person may not value you or share your goals. If you are not in or trying to start a business partnership, it is likely that those with whom you work can be otherwise combative right now. You might find insubordination if you are a leader, or general tension and coldness from your colleagues. ',
    index: 23
  },
  {
    name: 'Ace of Cups',
    description: 'In the Ace of Cups card, there is a hand emanating from the clouds holding out a cup, as if in a offer to the querent to take a drink. This cup is overflowing with sparkling water which symbolizes pure and pristine emotion. If you take this offer, drinking from this cup will surely bring you nothing short of emotional as well as spiritual fulfillment. The cup has five streams of water overflowing from the brim. These five streams represent the power of intuition and show the importance of listening to your inner voice. In order to obtain the kind of emotional or spiritual fulfillment that is depicted in the Ace of Cups, the querent will need to follow this inner voice, and remain true to it, regardless of the situation. This will require emotional discipline, but the rewards that this can bring are hinted at within the card itself: overflowing joy and happiness.',
    keywordsGeneralUpright: [
      'love',
      'new feelings',
      'emotional awakening',
      'creativity',
      'spirituality',
      'intuition'
    ],
    keywordsGeneralReversed: [
      'coldness',
      'emptiness',
      'emotional loss',
      'blocked creativity',
      'feeling unloved',
      'gloominess'
    ],
    keywordsLoveUpright: [
      'new romance',
      'friendship',
      'next level in relationship',
      'deeper intimacy'
    ],
    keywordsLoveReversed: [
      'sadness',
      'separation',
      'vulnerability',
      'insecurity in the way of love'
    ],
    keywordsCareerUpright: [
      'friendly relations at work',
      'new emotions about job',
      'jolt of creativity'
    ],
    keywordsCareerReversed: [ 'feeling unmotivated and bored at job', 'unfriendly colleagues' ],
    meaningUpright: "Getting the Ace of Cups upright shows that it's time to let loose of whatever emotional baggage you have and start living your life to the fullest. Like with all the other aces, there is a new beginning that is indicated here - a chance to start fresh. It might come in the form of opening yourself up to the possibilities of new relationships, romantic or otherwise, that have the ability to make you emotionally fulfilled. The release indicated by this card may either be spiritual or emotional, depending on what you are going through. The Ace of Cups may come to a reading after a long period of being lonely or enduring something that deeply hurt you emotionally, and it's appearance may be there to herald the turning over a new leaf.\n" +
      '\n' +
      'It is important for one to open themselves to more opportunities for friendships, love and spiritual learnings. There is a chance now to put your past behind you, for you are being offered the gifts of the cups.\n' +
      '\n' +
      'It is up to you whether you take the cup and drink to the fullest.',
    meaningReversed: 'When the Ace of Cups is overturned, the image here is clearest - the waters pour out of the cup, it becomes empty, the gift of its waters are being wasted. Seeing the Ace of Cups upside down during your reading means you have been enduring emotional instability or pain for some time. There is a loss that is indicated here, and perhaps something that has meant much to you is no longer giving you the joy that it once had. \n' +
      '\n' +
      'Since the cups also govern creativity, you may also be experiencing a creative block of sorts, and where the waters of inspiration once flowed, they have now dried up. \n' +
      '\n' +
      'In all these cases you must examine who or what is in control of the cup - which party allowed it to overturn? What can you do to place it right side up again?',
    meaningLoveUpright: 'One of happiest cards to get in a love tarot reading, the Ace of Cups suggests the awakening of new feelings. Should you be single, you may find yourself developing a new romantic relationship, or a friendship that will be deeply meaningful to you. If you are already in a relationship, a new stage of intimacy, compassion and understanding can be reached between the two of you. The Ace of Cups tarot love meaning signals there is an opportunity for you now to grow emotionally, spiritually and creatively, should you take the cup and drink. At this time, decisions made from feelings and intuition are favored; learn to trust what your gut says and avoid over-analyzing situations.',
    meaningLoveReversed: 'Some sadness and emotional upset can be signaled by the reversed Ace of Cups tarot love meaning. This may have stemmed from an argument or even a break up, leaving you to feel alone and vulnerable. This card can also simply mean feeling a bit somber about your current relationship, or perhaps having a temporary loss of faith. Something is blocking you from being able to experience, give and receive true love. You may not be meeting your partner, or others in general, with an open heart. It is likely that insecurity is playing a strong role; we must all be able to love ourselves before we can truly love another person. Try and look inward, and give yourself the love that you want before seeking it in another.',
    meaningCareerUpright: 'The upright Ace of Cups is a sign of both new emotional beginnings and friendly intentions. When it comes to your career, these principles can take shape here in a number of ways. If you are searching for a job, this card can mark a new start when it comes to your work. It may not always imply a new job, but can signify happy relations between you and your colleagues, or also an emotional awakening when it comes to how you perceive your work. New projects can be a wellspring of creativity. This is a good time to embark on new challenges and tasks, as you utilize this rush of inspiration. If you have been afraid of taking on more responsibilities, now is the moment to push past these fears; this is particularly true if you work in a creative field. ',
    meaningCareerReversed: 'When reversed, the good news and comradery of the Ace of Cups is subverted. For those who are searching for a new position, you may be disappointed. There may be some negative emotions surrounding your work. You may find frustration and obstacles, as well as a feeling of emptiness when it comes to your job. Whatever the reason is, you may likely also feel uninspired and unmotivated at work right now. Sometimes, as the cups also rule relationships, you may find that co-workers can be less friendly and helpful at this time. Do your best to weather the storm and find motivation where possible. If nothing else, try to remember that work is only one aspect of your life, not everything.',
    index: 22
  },
  {
    name: 'King of Swords',
    description: 'The King of Swords tarot card shows a king who sits on his throne while holding a double-edged sword that points upwards in his right hand. The King of Swords radiates intellectual power, clear thinking, truth, and authority. He understands that power holds great responsibility.The blue tunic that the king wears is a symbol of his spiritual understanding. The butterflies on the back of his throne are indicative of transformation. ',
    keywordsGeneralUpright: [
      'reason',
      'authority',
      'discipline',
      'integrity',
      'morality',
      'serious',
      'high standards',
      'strict'
    ],
    keywordsGeneralReversed: [
      'irrational',
      'dictator',
      'oppressive',
      'inhumane',
      'controlling',
      'cold',
      'ruthless',
      'dishonest'
    ],
    keywordsLoveUpright: [ 'high standards for love', 'controlled emotions' ],
    keywordsLoveReversed: [ 'selfish', 'abusive lover', 'low standards for love' ],
    keywordsCareerUpright: [ 'stern but righteous mentor', 'challenged to do your best' ],
    keywordsCareerReversed: [
      'dominating',
      'power-hungry colleague',
      'irrational work decisions'
    ],
    meaningUpright: 'The King of Swords appearing in a reading suggests that you should remain objective in your current situation - you must establish truth by sticking to the facts. The King of Swords and his intellectual power implies that you will need to use your intellect to make your point known and attain your goals. Besides your experience and education, you should be sharp and observant, to see deeply into problems that come your way.\n' +
      '\n' +
      'The King of Swords meaning also shows that you need to be stern in your role while ensuring that you have clarity of mind at all times. When judging a situation, you need to consider all the possible consequences to make an appropriate judgment. You will need to leave your emotions out of the judgment so as to maintain rational thinking at all times. The King of Swords meaning suggests that you should take time to reason with others and be candid with the observations that you have made.As far as your personal life goes, the King of Swords urges you to use your intellect and logic to maneuver the path that lies ahead. You will need to confront the issue at hand and make a sober decision. The King of Swords implies that you should be able to look at any situation and make a decision with complete impartiality. He can also be an indicator of the high ethical standards that the King of Swords demonstrates.',
    meaningReversed: 'The King of Swords in reversed shows tyrannical, abusive and manipulative habits. It may indicate the misuse of one’s mental power, drive, and authority. This is an illustration of persuasion and manipulation, so as to fulfill selfish desires. The King of Swords reversal meaning may also imply that you are showing off your level of intelligence by using big words when discussing ordinary topics. Another interpretation is that you may also be a loose cannon, especially where there are angry outbursts and impulses.',
    meaningLoveUpright: 'The King of Swords is someone who is cool, controlled, as well as ambitious. Though they have emotions, they can be very restrained. They instead rely on their intelligence and their logic. In romance, they approach their relationships ethically and respectfully. They may not be very romantic, and are likely to express themselves very bluntly. Should this card not represent a person, the King of Swords tarot love meaning can simply indicate high standards when it comes to romantic partners, especially intellectually. You and your partner at the moment can also be challenging and pushing each other to be their very best.',
    meaningLoveReversed: 'Reversed, the King of Swords can use their sharp intellect for selfishness. The wisdom and morality that guided his actions in the upright position is gone, and they can instead be frightfully selfish, and even abusive. This person also allows his emotions to run uncontrolled, flipping quickly from being cold and distant, into fits of rage. As characteristics or qualities, the reversed King of Swords tarot love meaning can signal that you may be exhibiting these qualities in your relationships. You may need to show more restraint and forgiveness to your partner, or else you may lose them. This card can also suggest low standards when it comes to potential relationships; try not to be swept away by feeling, but use some logic to evaluate whether someone is a good partner for you. ',
    meaningCareerUpright: 'The King of Swords is someone with high standards, and demonstrates them in his own work. Though they may seem a bit stern, this person acts this way to make sure you achieve your career goals. They challenge you to be your best self, while remaining true to their own principles. Should you choose to take his advice, you’ll be able to progress far in your career. Alternatively, this person may also represent you, or a point in your career path. Give yourself and others high standards, and push yourself to be the best that you can be. Having some routines and processes can also be beneficial for your work right now.',
    meaningCareerReversed: 'Your workplace may not be a very pleasant place to be right now. The reversed King of Swords signals a person at your job who is dominating, aggressive, and power-hungry. They may be in a place of power, and they can use that power for all the wrong reasons. If this doesn’t represent a person in your workplace, you may have to take a closer look at your own behavior. You may find that it is easier to lose your cool, and fail to act with as much integrity or logic as you usually do. At this time, you may also be suffering from lack of self-discipline; not just losing your cool, but your motivation and energy. ',
    index: 49
  },
  {
    name: 'Knight of Swords',
    description: 'What a rush we see this Knight in! The Knight of Swords card depicts a young man who is dressed in his armor and rides a strong white horse into the midst of a battle. The white color of his horse is a reference to the overall purity and intellectual energy which motivates this young rider. The sky behind him holds stormy clouds as well as trees which are tossed wildly around by the strong winds. The horse’s harness is also decorated with images of birds and butterflies. The cape of the knight is also decorated with those same birds.',
    keywordsGeneralUpright: [
      'assertive',
      'direct',
      'impatient',
      'intellectual',
      'daring',
      'focused',
      'perfectionist',
      'ambitious'
    ],
    keywordsGeneralReversed: [
      'rude',
      'tactless',
      'forceful',
      'bully',
      'aggressive',
      'vicious',
      'ruthless',
      'arrogant'
    ],
    keywordsLoveUpright: [
      'fears about intimacy',
      'easily bored partner',
      'decisive action'
    ],
    keywordsLoveReversed: [ 'aggressive partner', 'bullying', 'abuse', 'intense arguments' ],
    keywordsCareerUpright: [
      'getting things done',
      'focus on career',
      'efficiency',
      'making big moves'
    ],
    keywordsCareerReversed: [ 'ruthless or vicious at work', 'arrogance', 'intimidation' ],
    meaningUpright: 'When we are thoroughly obsessed by a certain idea and strongly wish to manifest it, we are oftentimes so blinded by the actual desire for its fulfillment that we fail to note the difficulties which we may come across, or the actions and consequences that it could bring. The Knight of Swords is a very powerful figure that is full of life as well as energy. This needs to be balanced with a proper and actual realization of compassion and responsibility.\n' +
      '\n' +
      'Once the knight sets forth towards his goals, there is absolutely no stopping him. He doesn’t see - and he doesn’t care - about any upcoming challenges. He is filled with sheer ambition, strength and determination to succeed with his quest no matter what. However, this determination could also blind him to see the potential consequences of his actions on others as he makes his way to success. He may charge forth into a very dangerous territory without preparation or actual foresight, and this could lead him to great danger.',
    meaningReversed: 'The reversed Knight of Swords suggests incredible impatience, impulsiveness alongside his bursting with energy. This Knight of Swords has a lot of energy but lacks any kind of direction, and this oftentimes results in them making rather rash decisions as well as pulling down other people with them. Their thoughts are oftentimes scattered throughout without any actual organization or logic. They are most likely disorganized and unprepared for the things that they actually want to achieve. The Knight of Swords reversal meaning indicates that you still have a lot of miles to walk in order to get the valuable life experience that you need in order to overcome adversities along the way. This is something to consider.',
    meaningLoveUpright: 'The Knight of Swords finds it particularly difficult to commit to a partnership. This person requires a lot of intellectual stimulation, and without it, can quickly become bored. This person can also be someone that finds it difficult to become too emotionally intimate with another person. If this doesn’t represent a person in your love life, the Knight of Swords tarot love meaning can point to a situation in which you’ll need to muster your courage, and quickly make decisions and take action. This can come in the form of making a commitment or a romantic proposal to a suitor, or even winning a lover back should they be on their way out of the relationship.',
    meaningLoveReversed: 'Be wary of the reversed Knight of Swords in a tarot love reading, as this person may be aggressive, controlling and perhaps even a bully. Convinced that they are right, they strong-arm others to do things their way regardless of how much it hurts the other person. They may have very little sympathy or understanding, and can delight in getting themselves into arguments, sometimes not just to have a debate, but to intimidate and pressure others. If this doesn’t represent a person, the reversed Knight of Swords love tarot meaning can simply suggest intense arguments, conflict and disagreement. Should these fights become commonplace, it may be better for the two of you to part ways.',
    meaningCareerUpright: 'When you combine your lofty ambitions with your determination, and almost singular focus, you’re sure to get what you want. Nothing quite scares you off, when it comes to your job. You’re likely to be excellent at what you do, going after your projects and completing them with almost ruthless efficiency. This may intimidate others sometimes, but this may not be a very big concern to you. If this doesn’t represent you right now, you may be called to use this Knight’s energy to go after something you want in your career. If you’ve had your sights on a promotion, a new job, or a particularly exciting project, go for it! Make a big move, and get someone’s attention. Be as determined and daring as the Knight of Swords, and you can find success.',
    meaningCareerReversed: 'While upright, the Knight of Swords’ ambition and drive left people in awe, in reverse, the Knight may instead come off as ruthless or vicious. Beware of hurting others as you complete your career goals; you may instead get a reputation for being a cutthroat, not caring who else gets hurt as long as you get what you want. Sometimes, others may also find you arrogant, and pushy when it comes to your ideas. Do you always need things to go your way? Do you ignore or dismiss the ideas of others without giving reasons? Sure, your methods may yield the results you want, but in the long term, consider what happens when nobody is there to support you. Try and be a bit more careful with your language and how you communicate.',
    index: 47
  },
  {
    name: 'Queen of Swords',
    description: 'The Queen of Swords wears a stern look as she sits high on the throne - looking off into the distance. A queen of the air element that the swords represents, her place in the clouds shows that no one can trick or fool her. The sword in her right hand is pointed towards the sky, whereas the left hand is extended like it is offering something. The Queen of Swords gives us the gift of judgment for everyday decisions and having the flexibility to take in knowledge from others.',
    keywordsGeneralUpright: [
      'honest',
      'independent',
      'principled',
      'fair',
      'constructive criticism',
      'objective',
      'perceptive'
    ],
    keywordsGeneralReversed: [
      'pessimistic',
      'malicious',
      'manipulative',
      'harsh',
      'bitter',
      'spiteful',
      'cruel',
      'deceitful',
      'unforgiving'
    ],
    keywordsLoveUpright: [ 'picky about lovers', 'independent partner', 'boundaries' ],
    keywordsLoveReversed: [ 'trauma', 'toxic relationship', 'manipulation', 'cruelty' ],
    keywordsCareerUpright: [ 'constructive criticism', 'wise guidance', 'respect in field' ],
    keywordsCareerReversed: [ 'cruel coworker', 'excessive negativity', 'poor communication' ],
    meaningUpright: 'The Queen of Swords is an archetype of an older, wiser feminine intellect. She could be thought of as the most masculine of the all the queens, and may come off as quite stern and emotionless. This card represents the importance of making judgments without relying on emotion alone. The Queen of Swords beckons you to look at all the facts before making a decision. This queen does have compassion, which is why she has her hand reaching outwards in offering, but she wants to connect to people using an understanding that is intellectual.\n' +
      '\n' +
      'This card also means that you will need to become independent with your judgments. You must rely on the unbiased intelligence, which has you researching alternative viewpoints and thinking carefully on your decision. Compassion and empathy in these cases can distract you from your task, so you need you are trying to keep a strong objective view while avoiding getting emotions involved. The Queen of Swords can also be about the way that we speak with others. This queen has the ability to tell people the way it is. This allows her to get her point across, so there is no confusion about what is being said. Above all, truth is important to her, so she feels no need to soften her comments, thoughts, or opinions. She also expects the same frankness from other people, so this means that you need to be clear with everything that is being said, even if it may hurt.',
    meaningReversed: 'The Queen of Swords reversed meaning is that you may be thinking too much with your heart, and you are becoming too emotionally involved with your current situation. You have to start thinking more objectively, because your emotions could lead you astray. Take the time to look at the situation using various facts and use your head to create a clearer picture of what is really going on. Only then, can you decide what your next move should be.When reversed, the Queen of Swords can also be quite bitter, coldhearted, or resentful. You may have started to isolate yourself for a number of reasons, but the outside world could be taking this in the wrong way. You may have some explaining to do, especially if your relationships end up being stressed by your desire for solitude.',
    meaningLoveUpright: 'The person represented by the Queen of Swords can be a loner; she is very discerning about the people she surrounds herself with. Her intellect is sharp and perceptive, and her determination can be rather intimidating to those that do not know her well. Underneath her shell however, she can be loving and loyal, though she may still prefer to avoid grand romantic displays. If this is someone whose heart you’ll like to win, you’ll need patience, as this queen does not easily let down her guard. If this card doesn’t represent a person, the Queen of Swords tarot love meaning can suggest a time when you are looking for both independence and self-sufficiency alongside your partnership. This queen values her own space and identity. You may have to make some adjustments to create clarity and boundaries in your relationship.',
    meaningLoveReversed: 'A reversed Queen of Swords is someone who is bitter, manipulative, overly critical and can be downright cruel. This person can represent you our your partner at this particular time, or alternatively, someone outside of the relationship that is attempting to interfere. Sometimes, this person’s nastiness can be the result of trauma, and because of this, if your partner is demonstrating these traits, it can sometimes be the result of unresolved trauma that is coming to the surface. If you are single, there can be the chance that you have just gone through a break up, one that has left you feeling vengeful and unforgiving. These beliefs can be toxic; learn to use your experiences to overcome them, instead of being consumed by them.',
    meaningCareerUpright: 'The Queen of Swords can point to either someone more senior, or yourself in a career tarot reading. This person is wise, honest, and may be a source of constructive criticism. They can offer great advice on how to proceed in your career. If this card represents you, you may be at a period in your life when you are able to get much respect from your colleagues. You are able to effectively communicate your sharp ideas, as well as combine them with a strong place of empathy. You’ll likely have a strong reputation due to your integrity and your fairness.  ',
    meaningCareerReversed: 'Is there someone at work who is holding a grudge against you? The Queen of Swords reversed can indicate an overly critical person who uses her words and her intellect to create suffering. She can be harsh, and sometimes downright cruel with how she expresses herself. If this is you, you may need to learn how to communicate better. Can you be honest while also caring for another person’s feelings? Can you address your concerns about a project without blaming someone? These may actually benefit you by helping others better digest your ideas. Avoid being too negative. ',
    index: 48
  },
  {
    name: 'Page of Swords',
    description: "The Page of Swords card is representative of a person in one's life who shows an abundance of energy. With wind-blown trees, turbulent clouds and the their tossed hair, a youth stands proudly on a rocky precipice. This energetic youth has a sword in her hands. Her expression is one of determination, and perhaps a little bit of defiance - she seems ready to pounce at the slightest word. ",
    keywordsGeneralUpright: [
      'curious',
      'witty',
      'chatty',
      'communicative',
      'inspired',
      'vigilant',
      'alert',
      'mental agility'
    ],
    keywordsGeneralReversed: [
      'scatterbrained',
      'cynical',
      'sarcastic',
      'gossipy',
      'insulting',
      'rude',
      'lack of planning'
    ],
    keywordsLoveUpright: [ 'intellectual relationship', 'lack of emotional intimacy' ],
    keywordsLoveReversed: [ 'argumentative', 'defensive partner', 'failure to communicate' ],
    keywordsCareerUpright: [ 'ambitious', 'intelligent person', 'new career', 'education' ],
    keywordsCareerReversed: [ 'job-hopping', 'unsure about future career', 'office gossip' ],
    meaningUpright: 'Bright and alert, the Page of Swords is someone who never seems to run out of ideas. She is curious, always asking questions, and gifted with a sharp tongue and quick wit to match. Her aptitude for language also makes her an incredible communicator, and with her love of ideas, you may find her always engaged in some passionate debate.\n' +
      '\n' +
      'She seems to thrive on almost a kind of nervous energy, as if there was too much inside her to say, the wheels in her head always turning. As a news bearer, she may bring news that is represented by her suit - particularly, gossip, legal matters, agreements. Alternatively, you may find yourself required to use her energy - be alert, keep your eyes open and stay sharp and vigilant.\n' +
      '\n' +
      'This card may indicate that you are very eager to execute an idea that you have been having or a project that you cooked up just recently. You are quite passionate about it, and you cannot wait to share the progress with others. Compared to your passionate heart, time seems to be standing still. It is time to be talkative. When a Page of Swords appears in a reading, it signifies communication and sharing of ideas. Whether it is someone else’s ideas or yours, it is time to open up and talk about them as long as it is a constructive.',
    meaningReversed: 'When the Page of Swords is reversed, all the negative characteristics of her come out - and she may become almost dangerous. Being gifted with a sharp and alert mind, she may be using it for deception and manipulation. The sword that she wields may be used to create pain, her natural gift for language turned to a weapon. She may lack the understanding or the maturity to understand the suffering that she causes, feeling the rush that one gets upon lashing out. On the other hand, this page may be someone of empty words or promises - who though loves talking, does not really talk about much of substance. Take care to show strength and action behind your words, for you may be damaging your reputation.',
    meaningLoveUpright: 'As a person, the Page of Swords tarot love meaning reflects a curious intellectual, whose flighty, nervous energy may border on being anxious. In relationships however, they may be scared of emotional confrontations, and can likely be completely avoidant if they are faced with them. As an emotional state or a quality, the Page of Swords tarot love meaning can signal a relationship that is more cerebral, where lovers are more likely to love heady discussions, but are perhaps a bit more wary of emotional intimacy. One partner can also feel that their emotional needs are not being met. Sometimes, it can also signal small or petty disputes with your partner, which can turn into bigger conflicts should they not be handled properly.',
    meaningLoveReversed: 'The person represented by the Page of Swords tarot love meaning is someone who may lack empathy, sensitivity or depth, or can be someone who can be argumentative or defensive. They may delight in “being right”, but this can come at the expense of harmony and care for the feelings of others. This card can also suggest a failure in communication between partners, or perhaps even a misunderstanding creating paranoia. For your relationship to flourish, partners will have to learn some degree of tolerance for different viewpoints, flexibility and find a desire to cooperate, rather than create conflict.',
    meaningCareerUpright: 'When it comes to your career, you may be someone who is intelligent, innovative and ambitious. You may have lots of energy and many ideas to put into your career. Since this card is a page, this does point to some sort of apprenticeship, or new experience, meaning that you may either be in a period of training, school or the start of a new job or career path. With your ambition, you have lots of goals, and you’ll likely have some extra education, or experience so that you can reach those goals. ',
    meaningCareerReversed: 'You have lots of energy and curiosity, but right now it’s not really directed at anything. With no outlet, it seems like you can’t quite make up your mind about what it is you actually want to do for your future. You may move from one job to the next when you get bored, or decide it’s not for you. Oftentimes, to really get the full depth and experience of working somewhere, you do need to commit for a long time. Sometimes, this card can also indicate having lots of big ideas, but zero follow through. Without action, nothing ever comes to fruition. Get working! This card can also point to an office gossip, or a rude individual who uses their words to hurt others. ',
    index: 46
  },
  {
    name: 'Ten of Swords',
    description: "Another one of the most striking and ominous cards in the deck, the Ten of Swords shows a man lying flat on the ground with his face facing the dirt. He is covered with a red cloth from the chest down to his legs. Ten long swords are stabbed into his back, he may not have seen this end coming. There is a terrible stillness in the air: the sky above him is black and cloudy indicating the fear and negativity associated with death. The waters in front of him are still, with no ripples - adding to the eerie stillness and finality of this card. Looking into the horizon, in the east, the sun is rising, and the weather seems very calm despite the darkness. The Ten of Swords seems to intimate that this is the lowest point in one's life, and it cannot get worse than this. At least, even in this state, the sun is rising.",
    keywordsGeneralUpright: [
      'ruin',
      'failure',
      'bitterness',
      'collapse',
      'exhaustion',
      'dead end',
      'victimization',
      'betrayal'
    ],
    keywordsGeneralReversed: [
      'survival',
      'improvement',
      'healing',
      'lessons learned',
      'despair',
      'relapse'
    ],
    keywordsLoveUpright: [
      'breakup',
      'separation',
      'sadness',
      'grief',
      'pain',
      'infidelity'
    ],
    keywordsLoveReversed: [ 'healing from past', 'putting relationship back together' ],
    keywordsCareerUpright: [
      'loss of job',
      'office politics',
      'breakdown from stress',
      'burnout'
    ],
    keywordsCareerReversed: [ 'changed jobs', 'found less stressful work' ],
    meaningUpright: 'The Ten of Swords indicate a major disaster of some sort. It shows that a certain force of extreme magnitude has come to hit you in your life - one that you may have not foreseen. There is a sense of betrayal that is indicated here, for the character is stabbed in the back. This seems to be a reminder that despite how much we try, we cannot control everything - there are things that are beyond our ability to change. Here, this situation is unavoidable. \n' +
      '\n' +
      'The tale of the suit of swords is a powerful metaphor, one that ends in tragedy. The swords are a symbol of the intellect, of intelligence and logic, and yet we find the final culmination of this suit a complete and total defeat of the spirit. We must realize that the swords are a weapon that can have immense potential for destruction or for good. The story as it unfolds from the ace to the ten is one where an untrained individual uses this weapon for faulty reasons - makes many mistakes, and then spends an entire lifetime attempting to run away from the power that he misused.\n' +
      '\n' +
      'This person believes the swords are external to him when they are part of him, and when they inevitably return, he once again suffers. His pain is not the pain of his circumstances usually, but the pain of fear, of anxiety, of not being able to be a master of his surroundings. After the hopelessness of the nine of swords, what could have happened? Were you overwhelmed by the pressure? Or did you take the final sword upon yourself and admit defeat?\n' +
      '\n' +
      'The Ten of Swords depicts that situation where your mentality is ‘poor me’, you feel like there is nothing you can do. Pause and remember that as with the death card, the end of something means a new beginning. Let go of what you have lost, and focus on the new path forward because that is where your life is meant to go. A good example is a break-up with your partner - though it could be intensely painful, it could also be the beginning of a new sense of independence.',
    meaningReversed: 'When we see any version of the Ten of Swords , the feelings are powerful. Whether reversed or upright, the card signals the finality of defeat. There is no way to avoid this tragedy - it has happened over a long course of events that have been a long time coming.\n' +
      '\n' +
      'With the reversal though, also comes to a recognition that you have hit rock bottom, there is no more that is left for you to give. With that also comes the release that things can only get better and the cycle can start anew. But like with the eight and nine of swords, this release must be initiated by you. There is an opportunity being presented here to correct what has hurt you, but you must make the effort to climb out yourself. What has happened was terrible, but everyone has a part in the responsibility.',
    meaningLoveUpright: 'Unfortunately, the Ten of Swords tarot love meaning can indicate a relationship that is coming to its end, or a period of time filled with suffering, bitterness, grief and pain. Likely, the relationship was headed towards failure of some sort, and you may have already seen it coming. Sometimes, this card can also suggest betrayal, indicating infidelity. While this period of time may be incredibly difficult, you’ll need to come to terms with it and accept the inevitable end. Singles may be dealing with similar feelings that have lingered after a past relationship. Only with acceptance, can you truly heal, and move forward. The worst has happened, and despite how it looks, it can only get better from here. ',
    meaningLoveReversed: 'You may have many scars from past romantic wounds, but the reversed Ten of Swords tarot love meaning can suggest that you may be on your way towards healing. If you are in a relationship, the bonds between you and your lover that seemed permanently severed before may be healing. In other cases, the relationship may have already collapsed, but you have managed to cope. There may still be feelings of anger and despair, but also recognition of the lessons that this heartbreak has taught you. It is likely you’ll be able to recover from this situation with more strength than ever. ',
    meaningCareerUpright: 'In the worst case, you may be reaching the end of your current job right now, as the Ten of Swords signifies endings, and cutting one’s connections. Sometimes, this card can also suggest that you may be dealing with office politics that have left you defeated; perhaps colleagues have been spreading gossip. Alternatively, you may instead have been working very hard, pushing yourself to collapse, and forced to take a rest. All of this may have been necessary for you to grow; when you go forward and heal from this ordeal, think of what you have learned, and know that you will survive.',
    meaningCareerReversed: 'Your path to healing from past stresses is getting started. You may have changed jobs recently, or left a job that was creating lots of frustration, anger and resentment for you. Whatever had happened, the worst of it is now over. You can breathe a sigh of relief that what is ahead will be easier to deal with. However, this card can instead suggest that this stressful time is getting worse, and that unless you do something to distance yourself from it, you are on the verge of collapse. You’ll need to weigh whether your mental health is worth the amount of suffering you are going through. ',
    index: 45
  },
  {
    name: 'Nine of Swords',
    description: 'The Nine of Swords depicts a woman that is sitting on her bed while she holds her head in her hands. It appears as though the woman has just awakened from a very bad nightmare. She seems to be upset, anxious and fearful. Nine swords are hanging on her wall, and a carving that depicts a person defeated by another can be found in her bed. The quilt has been decorated with various astrological symbols and roses. Here we see the same woman in that we saw earlier in the Eight of Swords - and perhaps, she was finally released, but haunted by the nightmares of the suffering she endured while she was left and deserted.',
    keywordsGeneralUpright: [
      'fear',
      'anxiety',
      'negativity',
      'breaking point',
      'despair',
      'nightmares',
      'isolation'
    ],
    keywordsGeneralReversed: [
      'recovery',
      'learning to cope',
      'facing life',
      'finding help',
      'shame',
      'guilt',
      'mental health issues'
    ],
    keywordsLoveUpright: [
      'not trusting partner',
      'suspicious of partner',
      'regret from past'
    ],
    keywordsLoveReversed: [ 'getting help from partner', 'alleviating stress by sharing' ],
    keywordsCareerUpright: [
      'anxiety',
      'paranoia',
      'stress from work',
      'no coping mechanisms'
    ],
    keywordsCareerReversed: [ 'clarity about work', 'finding peace', 'stresses becoming real' ],
    meaningUpright: 'The Nine of Swords is often associated with fear and anxiety, about all the things that worry you and keep you up at night. Sometimes this card can be associated with trauma - one which may be shameful for you to confide with others about, and all the psychological responses that come from experiencing that trauma. \n' +
      '\n' +
      'When we are never released from the entrapment depicted in the Eight of Swords, we escalate into the Nine of Swords, where we are plagued by nightmares. The suit of swords is one that is concerned with the mind, with logic, with intelligence, and with communication, but somehow the Nine of Swords was caught on the destructive end of the mind, the one which turns inward on itself, multiplies and festers. Questions are plaguing you, and you find yourself reciting all the possibilities - all the things that can happen to you. You are haunted by what could be.\n' +
      '\n' +
      'There is a sense of repetition within this card, that some event which has troubled you before, and one which you managed to either repress or run away from, is coming back again. Sharing your grief does at least provide an outlet for your pain and may release you from carrying this burden alone. Is there anyone that you can feel comfortable speaking to?\n' +
      '\n' +
      'In cases where it is less about trauma and more about general anxiety, analyze yourself and think if this is a feeling that is within your control or if there are other factors that contribute to your anxiety. Concentrate on the matters which you can control, and learn to ask for help.',
    meaningReversed: 'To come across the Nine of Swords reversed still signals something similar to the upright version - that you may find yourself being terrorized by nightmares, by anxiety and stress. Some trauma from your past is coming back, and you find the grief of unresolved issues overwhelming.\n' +
      '\n' +
      'But here we also see hope, at least there is the desire to leave this nightmare. You must understand that this suffering will not cease until you yourself put in the effort to leave it. There is much work that you must do to drag yourself towards release. But just as you have a ways out, you must understand that you can still fall deeper into despair. Your job is to avoid that outcome, if you push forward you may find yourself out, but if you do not, you may find yourself sinking deeper.',
    meaningLoveUpright: 'Anxieties and fears can escalate with the Nine of Swords tarot love meaning. Some nightmare situation may be keeping you up at night. Oftentimes, this card suggests that the fears are not as terrible as they are in your head. You may be struggling with guilt, remorse, insecurity, trusting your partner, or mental health issues. You’ll need to understand for yourself whether these feelings are truly rational. Anxiety may be causing you avoid looking at the problem and facing it head on, but if you took the effort to open your eyes, you may find that you can work through these issues. If you’re single, past relationships can be a source of remorse, sadness and regret, and these feelings must be worked through before going into another relationship.',
    meaningLoveReversed: 'You may be ready now to be honest and face the truth with the reversed Nine of Swords tarot love meaning. If you’ve been suffering quietly, being honest with your partner can be give you the release you need. It is not easy to carry the weight of your anxieties alone, and if your partner is supportive, they can be there to give you the reassurance you need. Through discussion, you may learn that the things that are keeping you up at night are not as bad as you had thought they were. If you’re single, you may be working on yourself, so that you can enter a healthy and loving relationship again. The time is almost there, and you may be feeling ready to find love again.',
    meaningCareerUpright: 'Stress and anxiety are the biggest features of your current work situation right now. Sometimes this card can also point to paranoia, and that things are really not as bad as you believe they are, which can be good news. Regardless of the circumstances, work may feel incredibly overwhelming right now, and you may reach burnout if you continue without changing anything. If your stress is due to external factors, you may need to take concrete action, such as searching for somewhere else to work, or changing your career path. If your stresses are mostly due to anxiety and mental health issues, you may need to learn how to think more positively. Internal shifts may be needed, and you may benefit from the help of a professional or a trusted friend to give you a more objective view of everything.',
    meaningCareerReversed: 'The issues that you’re facing in your workplace can either start to lesson, or get worse. Ideally, you have figured out that your work situation isn’t as bad as it seemed, and you only needed to develop some changes in your attitude, perspective, or behavior in order to solve the problems you’ve been dealing with. The negativity you had about your work is fading away towards brighter days. Alternatively, your situation truly may have collapsed and gotten much worse. You may be truly burnt out, unable to go to work because of your stress. To understand the whole picture, look at other cards in your tarot spread. ',
    index: 44
  },
  {
    name: 'Eight of Swords',
    description: 'On the Eight of Swords is a woman who is tied up and blindfolded. There are eight swords placed strategically around her in a way that restricts her movement as though she is in some kind of trap or jail. However, it seems as though whoever built the trap was a little lazy or hasty, leaving some open space where she could escape. But because of the blindfold preventing the woman from seeing, she has no way of finding her way out of this trap. The barren land around her might signify a lack of creativity of some sort, while the grey sky in the background can signify despair, since there she feels that there is no hope of her breaking free from the kind of situation that she is bound to. If only she could take the blindfold off, she would see that she could simply just walk out of this situation.',
    keywordsGeneralUpright: [
      'trapped',
      'restricted',
      'victimised',
      'paralysed',
      'helpless',
      'powerless',
      'imprisonment'
    ],
    keywordsGeneralReversed: [
      'freedom',
      'release',
      'taking control',
      'survivor',
      'facing fears',
      'empowered',
      'surrender'
    ],
    keywordsLoveUpright: [
      'feeling trapped',
      'suffocated',
      'smothered',
      'passive in love life'
    ],
    keywordsLoveReversed: [
      'clearer perspective of relationship',
      'active role in love life'
    ],
    keywordsCareerUpright: [
      'dependence on job',
      'can’t change careers',
      'fear of job changes'
    ],
    keywordsCareerReversed: [
      'new job to reach potential',
      'freedom from anxiety',
      'continued struggle'
    ],
    meaningUpright: 'The general meaning in the Eight of Swords is that of a feeling of being trapped and victimized. You may feel powerless because, in your mind, you feel that changing the situation might be beyond you. This feeling of helplessness that you have, the feeling that you have no agency in your life, has played a major role in making your situation worse.\n' +
      '\n' +
      "Surrendering one’s power to an unknown entity, whether it's fate, or God, the government or something else means that you are giving away your own personal responsibility to affect change. You have willingly relinquished the driver's seat in the journey of your own life, and it isn't going well for you. It is advisable for you to avoid making an important decision at this time since your judgment is likely clouded.\n" +
      '\n' +
      'The good news is that because these traps are things that we create ourselves, we can also leave them if we put our minds to it. It is simply the matter of taking off the blindfold, and seeing beyond the limited perspective that we created for ourselves - to see the possibilities, and to recognize that you have your own internal power.',
    meaningReversed: "Getting the reversed Eight of Swords is a good sign, since it shows maturity and self-acceptance, and a recognition of one's own power and responsibility - especially after a long struggle of doubt. It means that one is capable of making conscious decisions because they are confident in who they are, and their power to affect change in both themselves and the world. It's time to free ones self from the past and proverbially clear out their closet, creating room for new things and experiences.",
    meaningLoveUpright: 'When the Eight of Swords appears in a love tarot reading, you may be feeling trapped; do you feel smothered in a relationship, or in a now stale partnership you cannot leave? You may feel as though you have no choices, but this usually isn’t the case if you look at the bigger picture. We deny ourselves possibilities when we are too scared of doing the hard work of communicating our boundaries or standing up for ourselves. In order to make changes, you must be the one to take action and control. Freedom doesn’t come with passivity. If you’re single, this card can also point to being too passive in your love life. You may be unwilling to venture and meet others, hoping that the solution to your romantic life will be a person that can sweep you off your feet. This often doesn’t yield results.',
    meaningLoveReversed: 'As you take off the blindfold, take a long clear look at your romantic life. The Eight of Swords tarot love meaning can suggest that your perspective is changing now that you have a more clear and objective understanding of your relationship. Anxieties may be lifted, and it can now be clear to you what needs to be done in order to feel happier in your romantic life. If you’re single, you may find yourself more willing to take your love life into your own hands. Fears and anxieties that have blocked you from truly pursuing romance can be lifted.',
    meaningCareerUpright: 'Your career isn’t quite what you thought it would be. Yet because your job is tied to your means of living, you feel that you can’t leave right now. You may feel you do not have a back up plan, or other positions, jobs or career paths available to you right now. If you’re looking to switch career paths, it may take some education, but this can be difficult without having a steady income. While it may feel like you don’t have options, you may just need to think outside the box. Anxiety may make you feel like you have less options than you actually do. Ask for help, look over your budget, turn a hobby into a business, find a reputable place to get a student loan; there are likely many options, where you don’t have to keep suffering. ',
    meaningCareerReversed: 'It may have taken a while, but you have finally found release from your anxiety about your career. Things can be a bit easier now, and your vision is less clouded from stress or fear. Sometimes, this card can suggest a new job or position that you have attained, one that allows you to realize your full potential. The reversed Eight of Swords however, can at times also signify just the opposite. You may instead have lost all hope, resigned yourself to the idea that no matter what you do, this is the only path for you. Every day may be a struggle. Remember that you do have the power to change things, so long as you open your eyes to all possibilities, and don’t let fear take over. Nobody will save you except yourself.  ',
    index: 43
  },
  {
    name: 'Seven of Swords',
    description: 'In the Seven of Swords card, there is a man that is seen running away sneakily from a camp of some sort, while carrying five swords in his hands. Behind him, two other swords are on standing on the ground. From this image, we can deduce that the Seven of Swords is about stealth, getting away with something, deception or betrayal. The expression on the man’s face shows quite a bit of confidence, and he seems to be sure of his success on this mission of stealing the swords. Unfortunately for him though, on the left there seems to be a group of soldiers who have discovered the theft and one soldier is actually raising a flag or a weapon as if to signal his pursuit.',
    keywordsGeneralUpright: [
      'lies',
      'trickery',
      'scheming',
      'strategy',
      'resourcefulness,sneakiness',
      'cunning'
    ],
    keywordsGeneralReversed: [
      'confession',
      'conscience',
      'regret',
      'maliciousness',
      'truth revealed'
    ],
    keywordsLoveUpright: [
      'lies and deception',
      'affair',
      'sparing feelings',
      'feeling suspicious'
    ],
    keywordsLoveReversed: [ 'lies revealed', 'end of playing games', 'dropping pretension' ],
    keywordsCareerUpright: [
      'gossip',
      'sabotage',
      'jealousy at work',
      'working strategically'
    ],
    keywordsCareerReversed: [ 'liars exposed', 'consequences of actions', 'changing approach' ],
    meaningUpright: "The Seven of Swords in general, is said to be about betrayal and deception. When you get this card, it may imply that you or someone else in your life is having difficulty getting away with something. There are instances when we are forced to be sneaky, hoping that we will not be discovered. When we are found out, we have to face the consequences - whether it's embarrassment, punishment, or worse. Sometimes this happens when there are instances when you had to think on your feet, and did something that was somewhat shrewd and out of character. Now there is a danger of the secret coming out.\n" +
      '\n' +
      "You may be tempted to sneak away from somewhere, indicating a situation that is no longer working as expected. Instead of dealing with it, you choose to sneak away and hope that you will go unnoticed. Perhaps you were hoping that this issue would just resolve itself over time, and you've neglected it - leaving it to only grow and get worse.\n" +
      '\n' +
      'The big question, when looking at the Seven of Swords, is whether escaping will solve this problem that you are facing. While you might be thinking that you have gotten away, you discover that the situation has cornered you and you are found out as you are trying to escape.There are instances when the Seven of Swords may indicate the willingness to go solo. You may have the urge to explore and discover some things on your own. This can be an effective approach if you want to assert your independence and bypass group agreement. The Seven of Swords symbolism may be encouraging you to go on this path; sometimes innovation comes from a rogue genius.',
    meaningReversed: "The Seven of Swords reversed can have multiple meanings depending on the context of the other cards within the reading. It can suggest firstly a need to change your approach - the tactics you've been using are not working. While upright, this card can stand for a cunning victory attained by deception and trickery, the reversal can stand for either a more extreme version of such behavior. Or instead, a kind of renewal of conscience. You or someone in your circle may be deciding to unburden themselves with their guilt, and come clean about some piece of manipulation they have been involved in. Trust has been broken, but with a confession, you may be on the road to repairing it. There is a desire here to try and do things in a different way, one that is collaborative rather than independent.",
    meaningLoveUpright: 'Lies and tricks may be abound with the Seven of Swords tarot love meaning. It may be important for you right now to remain cautious, especially if you’ve met someone new. You or someone in your romantic life can be dishonest right now, and in the worst possible cases, even unfaithful. If your instincts have been telling you that you are being lied to, you may need to confront this and have an honest discussion. If this has been you, consider the long term consequences of your actions. Even the kindest lie to spare feelings can grow into big problems should the root cause not be addressed. If you’re single, you may need to evaluate whether you’ve been too suspicious or untrusting of potential lovers, or on the other hand, been leading them on, or exaggerating who you are.',
    meaningLoveReversed: 'An end to lies and deception may be suggested by the reversed Seven of Swords tarot love meaning. Dishonesty always eventually comes to light, and this card signals that the truth is coming to surface now. If you’re the deceiver, it is in the long run more important to confess and admit to any wrongdoing. It is not easy to carry the weight of dishonesty; for it usually comes with constant anxiety of being found out. Those looking for love can be more willing to drop any pretensions or stop playing games. In the long run, this can bring you more fulfillment than having to consistently change yourself for love. ',
    meaningCareerUpright: 'There may be some shady characters in your workplace. Lies and deceit can take you by surprise. You may be dealing with colleagues attempting to sabotage you with gossip, badmouthing you to bosses, or attempting to take credit for your work. Be cautious about who you trust in this situation; it may come from where you least expect it. Sometimes, this card can also suggest you will need a certain degree of strategy to accomplish your projects. You may be the underdog here, and others may have more resources or established positions. A certain degree of working tactically can be an advantage for you now.  ',
    meaningCareerReversed: 'Truths are coming to light now, and if others have been acting untruthfully now, their lies can be exposed. Whether you’re the victim of this deceit, or you’re the one that has been unfair, guilt and shame is likely to push the perpetrator to confession and perhaps reconciliation. As long as you make amends, and face the consequences, there is likely to be forgiveness. Alternatively, the situation at work can escalate; sometimes those who are at fault are not brought publically to justice. Keep in mind, that however disappointing, one’s character will dictate their fate in the future. Sometimes the Seven of Swords is a simple statement that the strategies and the approach you’re using at work is just not working, and you’ll have to change how you handle your projects. ',
    index: 42
  },
  {
    name: 'Six of Swords',
    description: "The image in the Six of Swords shows a woman and a child in a boat being rowed in the water to a land that is on the other side. We can gather from the images that the woman and the child are leaving something behind, as their backs are faced towards us. The woman's head is covered with a cloak - perhaps she is fleeing something, and must go without others knowing her true identity. We can assume that because of this, she is undergoing great loss or sadness. The symbolism within the Six of Swords is that of loss or change, as well as moving towards a future that looks more promising than the one that we left behind. The six swords alongside the boat symbolize the strong power of the rational mind, compared to intuition and the heart.",
    keywordsGeneralUpright: [
      'moving on',
      'departure',
      'leaving behind',
      'distance',
      'accepting lessons'
    ],
    keywordsGeneralReversed: [
      'stuck in past',
      'returning to trouble',
      'running away from problems',
      'trapped'
    ],
    keywordsLoveUpright: [ 'moving on from relationship', 'reconciling after fight' ],
    keywordsLoveReversed: [ 'can’t move on', 'can’t let go', 'haunted' ],
    keywordsCareerUpright: [ 'leaving stressful workplace', 'moving to new role' ],
    keywordsCareerReversed: [ 'creating conflicts', 'self-sabotage', 'trapped at job' ],
    meaningUpright: 'The meaning of the Six of Swords is that you are experiencing a transition of some kind, but one that is not happy and filled with regret. This transition will most likely be the result of decisions you made in the past, and now they are forcing you to leave something behind in order to move forward. Despite your sadness, you need to remember that moving on is the ideal option for your future.\n' +
      '\n' +
      'Life is filled with moments when you are going to be forced into letting go of things that you have become attached to. This will be challenging. The Six of Swords shows the sadness that you may be feeling, but you have to remember that the pain will not last, so you should look instead to the future for strength. In life, there will be times that the only way to fix a problem is to leave it and move to start anew. You may feel like this is the coward’s way out, but escape is the only approach that is left when you have tried all other methods. The important part is to plot your new course that will lead you to happiness. The Six of Swords in this case, is to plan using your logic, clarity, and objectivity about where you are now, where you have been and where you want to go. Intuition can help, but you need to think logically to ensure your success.',
    meaningReversed: "The Six of Swords reversed can indicate that you have been trying to move on and make the transitions you need. However, you may be experiencing challenges making these a reality. You may keep returning to the past, whether it's because there are issues that are not resolved, or you are questioning your decisions. Another Six of Swords reversal meaning is that you have been resisting the transitions that life is giving you. You may feel that you are being forced into making moves before you wanted to or you do not want to move at all. In this case, you should think about the benefits of the moves, instead of the drawbacks. Like Orpheus in the underworld, you must only look ahead and not backwards, for if you do look backwards, you risk falling apart.",
    meaningLoveUpright: 'When the Six of Swords appears in a love tarot reading, it can signal a struggle is reaching its end. Sometimes, this can take the form of ending a relationship, or alternatively, putting a painful chapter of your relationship behind you and reconciling. In any case, it suggests the desire to leave the past, and go forwards towards an unknown, but brighter future. If you’re single, you may be ready to leave a part of yourself behind, perhaps one that prevented you from accepting love. If you have had old wounds you’ve been nursing, the Six of Swords tarot love meaning can be a welcome sight. You may be finally ready to leave them behind.',
    meaningLoveReversed: 'What do you find hard to let go of? The reversed Six of Swords tarot love meaning suggests that the past still has a strong hold on you, despite your attempts to leave it behind. On one hand, you may know that leaving the past is something that is the healthiest for you to do, but you may be compulsively pulled back. You may choose to stay in a loveless relationship by remembering its happy moments, unable to move on from a toxic ex, or past insecurities may be holding you back from living your love life fully. Examine what binds you, and also consider what potential happy future you are willing to sacrifice for its sake.',
    meaningCareerUpright: 'You may be putting a stressful period of work behind you. There may be relief and calm as you are heading towards a more relaxed phase of work. You should be making steady progress on your projects. Compared to past experiences, these times can be a welcome improvement. Sometimes, this card can also indicate a recent change of roles or positions into something that you are better suited for.',
    meaningCareerReversed: 'It seems that no matter what you do, you can’t escape your work troubles. Your workplace may be filled with stress, fights and conflicts that are draining and take a toll on your mental health. Even though you may want to leave, it seems like you are trapped in this job, and at the moment can’t find anything better. Sometimes, this card can also suggest that you may be the one creating the trouble; instead of letting things go, you may be returning to the same issues over and over again, holding grudges despite another party’s willingness to put things behind them. It’s likely that you may want to look at your own attitude and defensiveness and see whether that is contributing to your own stress levels. What can you let go of? If you do manage to leave this job, be wary that the same problems arise again. We can run away from an environment, from people; but not ourselves.',
    index: 41
  },
  {
    name: 'Five of Swords',
    description: 'The Five of Swords card depicts a young man who has a very convenient look of contempt on his face. He is looking at the enemies that he has managed to conquer. There are five swords that he possesses – which he has taken from the other combatants who are in the card. The two other figures are walking away from him in a slow manner with a sense of loss and sadness. Above them, the sky is tumultuous and cloudy, which indicates that not everything is well, despite the fact that the battle is already over.',
    keywordsGeneralUpright: [
      'arguments',
      'disputes',
      'aggression',
      'bullying',
      'intimidation',
      'conflict',
      'hostility',
      'stress'
    ],
    keywordsGeneralReversed: [
      'reconciliation',
      'resolution',
      'compromise',
      'revenge',
      'regret',
      'remorse',
      'cutting losses'
    ],
    keywordsLoveUpright: [
      'tension',
      'conflict',
      'arguments',
      'fights',
      'irritability',
      'wanting to be right'
    ],
    keywordsLoveReversed: [ 'getting back together', 'forgiveness', 'breakup' ],
    keywordsCareerUpright: [
      'workplace bully',
      'intimidation',
      'defensive attitudes',
      'hostility'
    ],
    keywordsCareerReversed: [ 'compromises', 'open dialogue', 'sabotage' ],
    meaningUpright: "This card indicates that you are engaging in a conflict of some nature. It can also suggest a disagreement with others, which leads to hostility and tension. Despite the fact that you think you’ve won, you might still lose in the big picture, because you have annoyed or hurt those that you have argued with, and as a result, you are on the road to isolating yourself. Perhaps, at the moment, you believed that it was more important to be right rather than appreciate and understand where the other side was coming from.Right now, it's important to attempt to pick up the pieces. You still have the chance to act while the conflict is still fresh. You may feel as if everyone and everything is against you. You might also lose some friends along the way. This is why you will need to make a significant decision about your point of view. What is more important to you? Mutual progress, or winning? This might require you to stand up to a conflict within yourself.\n" +
      '\n' +
      'The card represents ambition in a way which is rather negative. Too much ambition without actual regard to the consequences or the people that you affect is never something good. Misplaced ambition such as the one depicted by this card can leave you as a dejected loser or a callous winner – in both cases, the connotation is rather negative. This card instead asks us to be more considerate of those that we surround ourselves with, to let go of ego.',
    meaningReversed: 'In the upright position, the Five of Swords is a card of tension, conflict, and disagreement. The Five of Swords reversal meaning shows you that all you want is for that particular period to be over so that you can forget and forgive. Because you are beginning to understand that winning is not everything, you will be capable of focusing your energy on something a lot more constructive and positive.\n' +
      '\n' +
      'Another interpretation of this card in reverse is that the conflict you are experiencing is actually going to become more upsetting as you realize that there can only be losers. These are terms that you need to come to grips with.',
    meaningLoveUpright: 'Unexpected change and uneasy energy can be signaled by the Five of Swords tarot love meaning. There can be an anxious and demanding feeling in the air, making it easy for arguments and fights to materialize. You and your partner may feel irritable, and without taking some care, conflicts can be easy to start. Should you find yourself in one of these, you should think carefully about your reasons for being in this squabble, and make sure that you’re not arguing simply for the sake of being right. Egos may push you and your loved one to clash without any real reason. Sometimes, this can create passion when it is sorely needed, but can be damaging should it continue.',
    meaningLoveReversed: 'Reconciliation after heated tensions is possible with the reversed Five of Swords tarot love meaning. There is a desire between you and your lover to lay down your swords and find a compromise. It is likely that wounds will still be painful even if both choose to let things go. At times, this card can indicate walking away from a lover or potential relationship, should reconciliation not be possible. Though painful, this may have been the better choice if heated arguments are happening much too often. Sometimes, it is better in the long run to cut your losses and walk away before more damage is done.',
    meaningCareerUpright: 'Conflicts are erupting at work, and considerable amounts of hostility is in the air. It can be easy right now for arguments to explode. This can come from misunderstandings, lack of communication, or poor leadership. The Five of Swords can also signal bullying and intimidation. Whether it’s you or another person, you may be called upon to stand up for yourself or someone else. While it can be tempting, ensure that you handle the matter professionally, and don’t be afraid to pull in HR if you need to. Processes are usually in place to handle these situations. However, this card can equally point towards self-victimizing, meaning that your impression of the situation may be what is causing these conflicts in the first place. Defensive behavior usually creates a cycle of aggression, so be very clear with your own actions and how they affect this environment. ',
    meaningCareerReversed: 'What was once a stressful and hostile work environment may be in the process of getting better. It seems that a resolution is possible now as everyone is ready to put down their swords. Compromises are made, and open communication is now possible again. If this doesn’t apply to you, this card can also suggest that an escalation in hostility is happening instead. If you’ve been dealing with a workplace bully, they may up their attacks towards you, sometimes even attempting to get you fired. Don’t be afraid to bring this up with your manager or HR, it’s their job to deal with these kinds of conflicts. Once you do though, make sure that your own behavior isn’t also a cause for concern. As long as you’ve handled things calmly and professionally, you can make it through.  ',
    index: 40
  },
  {
    name: 'Three of Swords',
    description: "One of the most iconic images in the tarot, the Three of Swords displays a floating heart that is pierced by three swords. Above it, there are heavy clouds. There is also a heavy downpour in the background. The symbolism is pretty opaque, and the emotional effect that it has is immediate. The heart is the seat of warmth, affection and spirit, and the three swords indicate the power to harm, cause pain, and create suffering to what it pierces. This is an image of grief, loss and literally heartbreak. The clouds and rain depict the surrounding grimness of the situation. All these symbols point to the Three of Swords showing a low point in one's life.",
    keywordsGeneralUpright: [
      'heartbreak', 'separation',
      'sadness',    'grief',
      'sorrow',     'upset',
      'loss',       'trauma',
      'tears'
    ],
    keywordsGeneralReversed: [
      'healing',
      'forgiveness',
      'recovery',
      'reconciliation',
      'repressing emotions'
    ],
    keywordsLoveUpright: [
      'breakup',
      'argument',
      'conflict',
      'separation',
      'sadness and tears'
    ],
    keywordsLoveReversed: [ 'forgiving one another', 'moving on after pain', 'separation' ],
    keywordsCareerUpright: [
      'conflicts at work',
      'job loss',
      'hurt feelings at work',
      'feeling hopeless'
    ],
    keywordsCareerReversed: [ 'putting conflicts behind', 'developing better processes' ],
    meaningUpright: 'The Three of Swords depicts the message of rejection, betrayal, hurt and discouragement. In moments like these, we are well served by the mind. If you can think logically about it and prepare for the experience, the impact of this pain may be minimized.\n' +
      '\n' +
      'But remember too, that pain and grief are a normal part of life, because they make us appreciate what joy and happiness we have, as well as teaching us. It is through pain that we learn to be avoid mistakes that could lead us into danger and grief. It is therefore a necessity in the journey of life. The Three of Swords therefore is a depiction of suffering that is meant to make us stronger, more careful and more vigilant.\n' +
      '\n' +
      "Sometimes life gives us no choice - we are knocked down. But what determines one's future is the choice of whether to remain knocked down, or rise again. Each little piece of suffering you encounter serves as a stepping stone to find a deeper meaning in this world. This card comes at a time when you need to prepare yourself for this next stage in life. While the grief may be extremely hurtful, it enables you to forget your past and focus on your future knowing that you have control of what actions you take afterwards. Don’t dwell so much on what is troubling you but instead, focus on what is approaching, because you determine your fate. ",
    meaningReversed: "The Three of Swords reversed indicates that have faced a recent loss, a break-up or a moment of grief. You may be still recovering from this, and your emotions have not completely calmed, making it difficult to move on. Although you may still be thinking of your past suffering, this card may be a signal that it's time to let go and look forwards towards life ahead of you, because there is much for you to enjoy.\n" +
      '\n' +
      'Many don’t see this, and they end up being immersed in their own pain for too long, delaying their own recovery process. Don’t focus too much on what happened, renew your emotions and gather your courage. The reversed Three of Swords card is here to let you know that all difficult moments pass - they are not there to stay, and when we fall, we can also rise again.',
    meaningLoveUpright: 'The imagery of this card is plain and simple; heartbreak is to come with the Three of Swords tarot love meaning. This is likely to be a time in your life of tears, sadness and heartbreak. If you’re in a relationship, this can sometimes point to a breakup, a conflict, or some kind of separation. In the worst case scenario, since this card is a three, it can also point to a third party creating trouble in your relationship. You and your partner may have to face difficult problems in order to remain together. Without clear and respectful discussions and a willingness to work together, the relationship can reach its end. If you’re single, it may be that past grief and suffering is affecting your ability to date. Past wounds have not yet healed, and it’s important to give yourself time before you attempt to find love again.',
    meaningLoveReversed: 'With the reversed Three of Swords tarot love meaning, lovers may find themselves settling their conflicts and forgiving one another. There is a desire here to heal, and move past old wounds, while looking forwards towards the future. For singles, this often means finally getting over past heartbreak, in order to be fully present in your dating life again. However, this card can also sometimes instead suggest the very opposite. Wounds may not be healing, but they may be repressed, so they fester and create resentment. Partners may not be able to forgive one another for past hurts. Sometimes, in these cases, it can be better for both to move on.',
    meaningCareerUpright: 'Work can be a great source of stress, frustration and sadness for you right now. At worst, it can point to a sudden job loss, or collapse of a company. More commonly, it can signal some kind of conflict at work amongst clients and colleagues. If you’re dealing with this, make sure that you have honest and open conversations with your coworkers, while keeping things respectful. There’s likely a lot that you all can learn from one another. If you’re looking for work, or you have just lost your job, the search right now can leave you hopeless. Don’t be disheartened; if you can afford it, take the time now to recover from this period of anguish. It may provide you a more positive mindset for your job search.',
    meaningCareerReversed: 'Things at work are starting to become bright again. Stressful conflicts are beginning to resolve, and your outlook and general happiness are improving as well. Your colleagues may have moved on from the conflict, or the person that was causing frustration has left. Everyone at work may instead be focusing on forgiving past mistakes, and working together on the future. Communication has improved, and there may be new processes in place to avoid the mistakes of the past. Sometimes though, this card can also point towards a worsening of circumstances, where instead of putting issues behind them, they can hold grudges and remain negative. Surrounding cards will give more context.',
    index: 38
  },
  {
    name: 'Four of Swords',
    description: 'There is a quiet stillness that is present in the Four of Swords, a sense of calm peace that is contrasted so deeply with the pain in the Three of Swords. Here, in a church, there is a carving of a knight that lies upon a tomb with three swords hanging above him while the fourth one lies beneath him. These three swords are a reminder of the suffering that he has endured in the earlier card. The position of the fourth sword seems to be a signal that the fight has ended. A child and a woman are depicted by the stained glass place behind the statue, giving the scene a sense of warmth and welcoming after the retreat. The knight has his hands positioned as if he is praying.',
    keywordsGeneralUpright: [
      'rest',
      'relaxation',
      'peace',
      'sanctuary',
      'recuperation',
      'self-protection',
      'rejuvenation'
    ],
    keywordsGeneralReversed: [
      'recovery',
      'awakening',
      're-entering world',
      'release from isolation',
      'restlessness',
      'burnout'
    ],
    keywordsLoveUpright: [ 'withdrawing from love life', 'alone time', 'taking a break' ],
    keywordsLoveReversed: [ 'rejection from pressuring lover', 'reigniting passions' ],
    keywordsCareerUpright: [ 'taking a vacation', 'mental health day', 'rest', 'self-care' ],
    keywordsCareerReversed: [ 'refreshed from vacation or time off', 'burning out' ],
    meaningUpright: 'After the time of chaos, anger and pain depicted in the Three of Swords, the Four of Swords can signal that it is time to retreat. The Four of Swords is a moment of rest. Whether this is from a choice to withdraw, or whether it is from pure exhaustion, it is not clear. We are still tender from the wounds that were inflicted, and the battle weapons still hang above us as a grim reminder of what was lost. In order to continue and re-emerge in your daily life, you must take the time now to take a breather. There is always the faint fear that something more is bound to happen again and it is advisable that you take all chances to rest. \n' +
      '\n' +
      'You need to gain strength and clarity in a quiet environment away from your current circumstances. It is time to re-evaluate, organize and understand your priorities. This helps to rejuvenate one’s spirit, and you come out stronger than before. The Four of Swords indicates it is time to gather new strength and prepare to face a new challenge. You have faced crisis after crisis, and it is wearing you out. You can face a new challenge only after getting away from everything and embracing a new atmosphere. \n' +
      '\n' +
      'Take the time to nurture yourself to re-enter life. Within us glimmers hope, and it lies quietly, waiting to reveal itself after we are healed anew.',
    meaningReversed: 'Although the Four of Swords card in a reading could mean it’s time for healing, a reversed card could mean restlessness. Your heart is willing to relax, but this is not what your mind wants. You feel that you have too much that is depending on you. Following this path is not advised, as it could have affects on your health.You can continue to fight, but sometimes that is ineffectual and you must have enough awareness of your own strength to decide when to back out. To rest, to retreat, is a means of self love sometimes, and though you may try to push ahead, that will only make it difficult for you in the long term.',
    meaningLoveUpright: 'With the Four of Swords tarot love meaning, some time to rest is in order. If you’re single, your excitement about your love life may have led you to push yourself to exhaustion. You may be trying too hard to impress someone, or have been dating someone new every day in order to find someone you truly want to be with. You may feel drained, and it is important to listen to your intuition and your body to take it easy for a bit. If you’re already in a relationship, you can both benefit from taking a vacation. Sometimes, this card can also indicate the two of you needing to be alone for a while; this doesn’t spell the end of the relationship, but everyone, perhaps especially introverts, need some personal time.',
    meaningLoveReversed: 'If you haven’t heeded the warnings of giving yourself some rest, the reversed Four of Swords tarot love meaning can signal that you won’t have a choice. If you’ve been chasing a potential lover relentlessly, you may find that your advances are now feeling unwelcome. You may benefit from giving this person time and space to make their own choice. Pressuring someone often creates the opposite effect of the one you desire. Alternatively, this card can also indicate coming out of a period of rest. You may feel more energized than ever! Couples who have felt that their relationship was getting a little too routine can find that their passions are reigniting.',
    meaningCareerUpright: 'Work may have been very busy or frustrating lately. You may have been putting in your all for a long time now, and chronic stress may be taking a toll on your body or mental health. Listen to your body, and give yourself a break. If you can, take a mental health day, and spend it caring for yourself or catching up on sleep. None of us are machines, and without some much needed rest, the effect it takes on our health can be long lasting. You can return with a refreshed mind after.  ',
    meaningCareerReversed: 'You may have given yourself a much needed little break from work, but you may now be feeling ready to return. Ideally, you’ll have used this time away to reduce your stress, and take some much needed care for yourself. With a refreshed and rejuvenated time away, you’re likely to find that situations that have caused you suffering and frustration before are a bit easier to handle. Try and be more aware of your stress levels from here on out. Sometimes however, this card can also signal continuing work despite needing rest. If this has been the case for you, you may want to reconsider. Our bodies will often force us to take a break. You may also want to consider changing jobs, if the situation truly looks like it won’t improve.  ',
    index: 39
  },
  {
    name: 'Two of Swords',
    description: 'The Two of Swords symbolizes the confusion we face when we are forced to make difficult choices. In the Two of Swords card, there is a seated woman that is blindfolded while holding a sword in each of her hands. In the background, there is a sea surrounded by crags and rocks that serve as obstacles for vessels and ships, stalling progress and action. The woman in the card being blindfolded is a representation of a situation which prevents her from seeing both the problem and the solution with clarity.\n' +
      '\n' +
      'The swords that she is holding in each of her hands show that there are two choices that lead in different directions and are mutually exclusive to one another. It may also depict a stalemate, which means that the problem should be addressed with a logical and rational thinking. The Moon positioned on the right side of the card signifies may signify the role of illusions and deception in the difficulty that the woman has in making a choice.',
    keywordsGeneralUpright: [
      'stalemate',
      'difficult choices',
      'stuck in the middle',
      'denial',
      'hidden information'
    ],
    keywordsGeneralReversed: [
      'indecision',
      'hesitancy',
      'anxiety',
      'too much information',
      'no right choice',
      'truth revealed'
    ],
    keywordsLoveUpright: [
      'choosing between lovers',
      'choosing between love / family / work'
    ],
    keywordsLoveReversed: [
      'no suitor is right for you',
      'can’t prioritize love / family / work'
    ],
    keywordsCareerUpright: [
      'choosing between career paths',
      'conflicts at work',
      'taking sides'
    ],
    keywordsCareerReversed: [ 'choices with no winner', 'stressful decisions' ],
    meaningUpright: "When we see the Two of Swords in a reading, we are encountering a stalemate. Two equal and opposing forces are joined in battle, and there seems to be no end in sight. This wasn't what you had in mind when you chanced to walk down this path, and you find yourself caught in the middle. Without something, or someone to intervene, this may continue indefinitely. We find ourselves in a situation where we must make a choice, we can side with one part of the situation, or we can side with the other. Neither seems particularly appealing, which makes the decision even more difficult. But unless we move past this stalemate, there can be no more progress.\n" +
      '\n' +
      "The Two of Swords is often related with balance and partnership. It signifies the need to keep your relationships balanced. Regardless if it is in business, friendship or romantic relationship, you may find yourself struggling to maintain the current state of affairs, and may find yourself caught in the middle.  In regards to your work, you may be currently stuck in limbo and are perhaps waiting on another party's decision. Remain patient and avoid pressuring people in making their decision abruptly. The Two of Swords meaning may depict a warning to have caution. Like the woman in the card, you may be choosing to keep the blindfold on, hoping the problem will just go away. You should avoid evading any issues that you are facing, since it will not solve your problems. ",
    meaningReversed: 'The situation we see in the reversed Two of Swords is a stalemate of a legendary kind, one where two forces are battling each other. This battle can be representative of both something internal or external, and you are forced to be in between and be the decision maker. However, because neither party seems particularly pleasing to work with, you may find yourself confused, the pressure is too much, and you are unable to make a decision.\n' +
      '\n' +
      'When you do make the decision, it will be choosing between two bad outcomes. Do not worry, the more important thing here is to make a choice, from then on, we can deal with whatever consequences come.',
    meaningLoveUpright: 'If you’re single, you may find it difficult to move ahead in your love life. The Two of Swords tarot love meaning suggests being stuck between decisions. Are you attempting to choose between two lovers? Or love and other aspects of your life? It seems like your options are equally appealing, and instead of being an active participant in your life choices, you may be attempting to avoid a choice altogether. Be careful that the world doesn’t make your choice for you. If you’re in a relationship, something perhaps blocks you and your partner from resolving your problems. The Two of Swords tarot love meaning also indicates a stalemate of sorts. It is not the time to ignore problems, but speak together carefully to find a compromise.',
    meaningLoveReversed: 'Sometimes, there is no right choice with the reversed Two of Swords tarot love meaning. If you’re single and find yourself attempting to choose between two potential lovers, it can seem that none of them feel particularly right to you. If you’re already in a relationship, you may find yourself choosing between your lover and other aspects of your life. You may feel more indecisive and confused than ever. Painful decisions are suggested by this card, regardless of where you are in your romantic life. The longer you wait to make a choice however, the more your anxiety grows, creating further issues. Sometimes you may be forced to make a decision when you’re not ready. Making a choice now, and dealing with the outcome can release the burden you feel. Listen to your instincts.',
    meaningCareerUpright: 'You might find yourself stuck in the middle of a work conflict. This can come in the form of having to side with one colleague or another, while all you want to do is remain impartial. Choosing one person over the other can create tension and rifts, and you may be worried about damaging your relationships with them. Sometimes, the card can mean you are trying to choose between two jobs or career paths. The Two of Swords can sometimes also suggest that you don’t have all the information you need to make your choice yet. If you still have time, use it to research and get the answers you need. ',
    meaningCareerReversed: 'It seems like the conflicts you’ve been experiencing at work have been escalating, and they can be creating lots of stress for you. If you’re stuck between two fighting colleagues, it seems that no matter what you choose to do, you’ll be in hot water, and that there are no right choices. Alternatively, you may find yourself responsible for big decisions at work; you can be leading projects, or making choices between two careers. There’s a lot of anxiety behind these decisions, as they seem irreversible. You probably have been doing a lot of research, but instead of helping, you’re dealing now with information overload, and things can be more unclear than ever. ',
    index: 37
  },
  {
    name: 'Ace of Swords',
    description: 'The Ace of Swords shows a hand emerging from the clouds wielding a double-edged sword. This double edged sword carries a golden crown while being encircled by a wreath. The wreath has for a long time been associated with victory, success and great achievement.The crown is used as the symbol for both royalty and the power to rule that comes with royalty.  Behind the foreground, the sword stands floating over a varied setting - which holds both mountains and sea, which are used as symbols of the vast reach and distant lands that the swords can be used to conquer, as well as ambition. ',
    keywordsGeneralUpright: [
      'clarity',
      'breakthrough',
      'new idea',
      'concentration',
      'vision',
      'force',
      'focus',
      'truth'
    ],
    keywordsGeneralReversed: [
      'confusion',
      'miscommunication',
      'hostility',
      'arguments',
      'destruction',
      'brutality'
    ],
    keywordsLoveUpright: [
      'attracted to discussion',
      'facing problems honestly',
      'communication'
    ],
    keywordsLoveReversed: [
      'failure to communicate',
      'clashing perspectives',
      'painful words'
    ],
    keywordsCareerUpright: [ 'stimulating work environment', 'clear communication', 'focus' ],
    keywordsCareerReversed: [
      'failure to communicate',
      'unable to express thoughts clearly',
      'boredom'
    ],
    meaningUpright: "As with all the aces, the Ace of Swords indicates that one is about to experience a moment of breakthrough. With its sharp blade and representing the power of the intellect, this sword has the ability to cut through deception and find truth. In layman's terms, this card represents that moment in which one can see the world from a new point of view, as a place that is filled with nothing but new possibilities. It is, therefore, the best time to work on your goals - as the aces all give green lights, and are signals of waiting opportunities and new beginnings.\n" +
      '\n' +
      'It might also be a good time for you to seek justice and the truth in all matters since your conscience is clear, and your thoughts are swift. If you rise to the occasion, your sharpness and clarity in thought will be rewarded. \n' +
      '\n' +
      'When we look at the swords closely, and see its double-edge, we are also reminded that this sword may be either used for noble deeds or to deal destruction. It all depends on the wielder, and is a warning too that excessive power holds the danger to corrupt. If you stick with principles, the sword will serve you well.',
    meaningReversed: "Getting a reversed Ace of Swords might mean that one's thoughts are confused, unsure and very chaotic. This isn’t a good time for one to make any decisions since they don’t have any clarity on what you should be doing, meaning that the chances of failure can be pretty high.At this time, it would be better to prepare yourself and take baby steps - work methodically as you slowly move towards achieving your goals. This would be a good time to lay back and rationally think your way through each stage rather than acting on impulse, since everything appears in a blur and is not very clear at that moment. It might also be a good time to seek advice since things may not be as they seem.",
    meaningLoveUpright: 'You’ll find intellectual discussion particularly attractive right now with the Ace of Swords tarot love meaning. Communication with your partner and discussing important issues at the moment can be rewarding for you. You should pay particular attention to facing problems or obstacles in your relationship with clarity and honesty. You may be able to find that confronting these issues can lead to greater harmony and understanding between you two. Though sometimes discussions can become heated, it is more important to speak about them instead of sweeping them under the rug. In the long term, by learning these communication skills your relationship becomes stronger.If you’re in a relationship that has already been in turmoil, or you’re recovering from a break up, the Ace of Swords tarot love meaning can also be encouragement for you to cut out toxic people or attitudes in your love life.',
    meaningLoveReversed: 'Confusion and clarity can be affecting your relationship at the moment. With the reversed Ace of Swords tarot love meaning, there can be misunderstandings and assumptions, and sometimes your partner can have a completely different point of view from your own. You’ll need to work hard in order to get on the same page again. This card can also sometimes suggest painful words; make sure that your communication with your partner is not too brusque. Feelings may be particularly sensitive right now, and without some kindness, confrontations can quickly turn into fights.',
    meaningCareerUpright: 'Since the aces always represent new beginnings, the Ace of Swords can represent a new job, position, or career that can bring you a lot of intellectual stimulation. You may find that your new environment is delightfully challenging and offers you lots of encouragement to grow your mind and your skills. You’ll likely be around colleagues that enjoy discussing new ideas, and communication can run very smoothly. Having a clear vision of what you want to do, as well as being able to express that vision can be helpful for you now. ',
    meaningCareerReversed: 'At work, the reversed Ace of Swords signals that there can be some miscommunication at work right now, which can create trouble amongst you and your colleagues. It may also suggest that ideas that you’re generating now can be a little far fetched, and could result in failure. Make sure that you are very realistic with what you can accomplish, and don’t keep your head in the clouds. Be careful with your choice of words, and make sure you can express yourself clearly. Sometimes, this card can also signal being bored at work. Your work may be tedious and tiring, no longer enough of a challenge to keep you attentive. ',
    index: 36
  },
  {
    name: 'King of Pentacles',
    description: 'The King of Pentacles refers to a man of high ambition, materialistic satisfaction, and worldly success. The King of Pentacles is sitting on a throne that is adorned with vines and bull carvings, and the robe that he is wearing is embroidered with many images of grapevines. He looks sophisticated and regal. He is also surrounded by different types of plants, vines, and flowers which depicts this king’s attainment of materialistic success. He holds a scepter in his right hand and the coin with a pentacles engraved on it in his left hand. The castle can be seen behind him, which is a symbol of his determination and effort.',
    keywordsGeneralUpright: [
      'abundance',   'prosperity',
      'security',    'ambitious',
      'safe',        'kind',
      'patriarchal', 'protective',
      'businessman', 'provider',
      'sensual',     'reliable'
    ],
    keywordsGeneralReversed: [
      'greed',
      'materialistic',
      'wasteful',
      'chauvanist',
      'poor financial decisions',
      'gambler',
      'exploitative',
      'possessive'
    ],
    keywordsLoveUpright: [
      'generous provider',
      'serious relationship',
      'emotionally and financially secure'
    ],
    keywordsLoveReversed: [ 'materialistic', 'greedy lover', 'being used', 'controlling' ],
    keywordsCareerUpright: [ 'success', 'encouraging mentor', 'referrals', 'good reputation' ],
    keywordsCareerReversed: [ 'poor reputation', 'unsuccessful at work', 'being discouraged' ],
    meaningUpright: 'When we meet the King of Pentacles, we feel immediately his regal and generous presence. He is a provider and a protector, for under his care is a flourishing and abundant kingdom where its citizens are prosperous and encouraged to grow. He is naturally responsible and reliable, and through the wisdom granted to him by his suit, he has grown all that he has acquired from practically nothing. To see him in the cards is to envision success - one that was won by earnest work.\n' +
      '\n' +
      'Generally, this card reminds us to stay in control of our energy and our resources in pursuit of a larger goal. When it comes to work, the King of Pentacles may refer to a more established man who will pay a significant role in your career. This man can be wise and rational, but he may also be careless when passing judgment. He can be your biggest supporter, but be prepared to receive unsolicited and harsh criticism. In love, this can indicate that the person that you’ve been waiting for can come along and will love you for who you are.With regards to finances, the King of Pentacles is one of the best cards to receive. This may mean that your financial situation is stable as a result of your wise investments and hard work. In case you are taking a gamble, be sure to initiate a calculated action.',
    meaningReversed: 'When reversed, the King of Pentacles falls from his throne. Once the king of a prosperous kingdom, it has been taken away from him, or lost. Disconnected from the energy of his suit, he may have been impatient, he may have been too indulgent, he may have gambled too far and overstretched himself, he may have sought shortcuts that led him to ruin. He may become too focused on the material, only understanding the cost of things, and never their value.\n' +
      '\n' +
      'The King of Pentacles reversed may also signify that your definition of success and happiness is only determined by outer appearances, and not by the true value that security and stability can bring to you. It is a time for you to cultivate an more wholistic attitude to the material world to find an authentic happiness. In terms of love, this card can mean that someone dear to you is currently facing issues due to matters concerning his or her career. When it comes to finances, the King of Pentacles reversed is telling you to look at the long-term goal. You may be facing financial issues but do not look at yourself as a failure. Stay positive and understand that this is just a phase in your life. When given the chance again, do not make choices based only on the short-term picture. \n' +
      '\n' +
      "The King of Pentacles' appearance in a reading can indicate some sort of material loss or loss in reputation - beware that you do not replicate his mistakes.",
    meaningLoveUpright: 'Successful, generous, dependable and protective, the person represented by the King of Pentacles makes for a great partner, parent, and provider. He is demonstrative of his love through action instead of words, and looks to create a stable and loving home for his family. If you meet this person, they may be slow to make a commitment, but this is only because they take love very seriously, and need to truly understand you before taking any next steps. While not representing a person, the King of Pentacles can suggest a time in your relationship which is secure and stable. The two of you will be very comfortable, both emotionally with each other, and materially. You may have worked very hard in the past to enjoy your current standards of living, and you can now relax.',
    meaningLoveReversed: 'Reversed, the King of Pentacles is stubborn, conservative, greedy and materialistic. They may do practically anything to get their hands on more resources; so be wary of characters in your love life that may only be using you. On one hand, this person may be irresponsible and unreliable, choosing to gamble away their resources. On the other hand, this person can use their material means as a way of controlling their partner and their family. If this doesn’t signal a person in your love life right now, the King of Pentacles tarot love meaning can suggest a period of emotional or financial insecurity, jealousness, manipulation or coercion.',
    meaningCareerUpright: 'In a professional context, the King of Pentacles can be an outstanding indicator of a successful business venture. When it comes to your work and your career, this King achieves his highest ambitions and has a great reputation amongst his colleagues. This card can additionally indicate that someone with more experience will mentor and encourage you in your chosen field. This person will have lots of experience, and can give you much needed support, and sometimes even recommendations to new jobs, or promotions.',
    meaningCareerReversed: 'When it comes to work, the reversed King of Pentacles can signal unsuccessful work projects, or at worst, the closing of a business, or the loss of job. There can be a lot of instability when it comes to work. You may be tired of your job, and this can highly affect the quality of your work as your motivation drops. Sometimes, this card can also signal  a ruthless person at work may discourage you or try to undermine you. It is important to ignore his negativity and focus on what you need to do. Engaging with such selfish, greedy and manipulating people will only drag you down. Instead, concentrate on your own career and doing your best. If you’ve been looking for a promotion or a raise, the King of Pentacles can sometimes point to you needing more experience.',
    index: 77
  },
  {
    name: 'Queen of Pentacles',
    description: 'The Queen of Pentacles card depicts a beautiful woman sitting on a decorated throne holding a golden coin. Surrounding her are beautiful blossoming trees and green floral gardens. Her throne is decorated with various beasts of the earth, tying her closely with nature and abundance. At the bottom of the card, on the right-hand side, a rabbit is pouncing into the frame, which symbolizes her high energy and fertility. The Queen of Pentacles, therefore, depicts a certain level of success and prosperity. But the rabbit at the bottom cautions us that we should be careful of where we leap when we are chasing that success.',
    keywordsGeneralUpright: [
      'generous',
      'caring',
      'nurturing',
      'homebody',
      'good business sense',
      'practical',
      'comforting',
      'welcoming',
      'sensible',
      'luxurious'
    ],
    keywordsGeneralReversed: [
      'selfish',
      'unkempt',
      'jealous',
      'insecure',
      'greedy',
      'materialistic',
      'gold digger',
      'intolerant',
      'self-absorbed',
      'envious'
    ],
    keywordsLoveUpright: [
      'stability',
      'abundance',
      'nurturing',
      'kind partner',
      'domestic comfort'
    ],
    keywordsLoveReversed: [ 'shallow and selfish partner', 'relationship for wrong reasons' ],
    keywordsCareerUpright: [ 'talented business person', 'mentor', 'colleague' ],
    keywordsCareerReversed: [ 'bad business partner', 'unreliable or jealous colleague' ],
    meaningUpright: 'The Queen of Pentacles represents both a down-to-earth woman who plays many roles to ensure that she keeps her family happy. She knows how and when to show love - keeping an orderly home, cooking comforting meals and takes care of the children. But do not mistake her for being only a homebody - alongside all these motherly attributes, she can plan business ventures and execute her plans successfully. It is through her naturally talented business sense that she is surrounded by such luxury. She is quiet and does not like disclosing her financial accounts, fearing that it could bring more complexity to her life, which she desires to keep rather simple. She may have a secret bank account that nobody knows about - for she may choose to be careful, vigilant and self-sufficient.\n' +
      '\n' +
      'The Queen of Pentacles therefore represents a motherly figure who desires to help you maneuver your way and achieve your goals with a the helping of her common sense. She will not only show you love, but she will also show you the way forward whenever you seem to be stranded and confused. With her advice, she will ensure that you do not make dangerous financial decisions. She offers you precautions, principles and support, all lessons that she has learned in her personal life. Because she is a self-made woman, she wants too for you to be independent and wise, such that you are also able to raise others and make them responsible.',
    meaningReversed: 'When the Queen of Pentacles becomes disconnected with the energy of her suit, she can become someone who is completely self-absorbed. Gone is the upright generosity in her suit, she can be selfish and even envious when others successes seem greater than hers. Upright, her home is usually a sanctuary for her guests, but reversed it may instead be slovenly - she loses the ability to take care of herself and her surroundings. Her focus on the material may manifest negatively, making her greedy, and yet lacking in her sense of duty and capability. How can she ground herself again, how can she re-enter the sacred relationship she naturally feels with the earth and all its living creatures?\n' +
      '\n' +
      'The Queen of Pentacles reversed may also indicate that you have misplaced priorities, which may eventually be compromising to your future. You may find yourself distracted and unable to focus on your work and your long-term goals. You could also be busy working on projects without taking time to consult experienced people who can guide you away from mistakes. This card could also suggest those that you care for are now ready to become accountable and responsible for their own lives. You must learn to let go and given them their independence - the role of caregiver is most rewarding when your loved ones have grown strong enough to make their own decisions.',
    meaningLoveUpright: 'The Queen of Pentacles is a worldly, practical, generous, hardworking and warm person, who has a talent both for business as well as a love of comfort and luxury. She enjoys making her home welcoming, always delighted to have guests. Single folks right now should be in a wonderful position to choose a partner that truly brings something into your life. You’ll likely have high standards, and hope for someone who has the same level of dedication, commitment and ambition as you do. If you’re already in a relationship, you may find that the two of you are enjoying a stable, fruitful and prosperous time in your life together. You can certainly afford to indulge a little and treat yourselves.',
    meaningLoveReversed: 'This person can be selfish and shallow, easily coveting what others have. Their own insecurity makes it so that they are often jealous and possessive, and this can extend to their lovers and relationships as well, so that they are controlling and often treat their partners more like objects to show off rather than having any serious strong affection or love for them. If you’re single, the Queen of Pentacles tarot love meaning can signal that you may need to take some time on developing your own confidence and healing any insecurities you have before entering a relationship with another person. Avoid getting into relationships for the wrong reasons; whether it’s for status, money or simply because you don’t want to be alone. Should you be in a relationship, avoid treating your lover as something to have; lovers need to consider each other partners with their own feelings, needs and desires, and be more respectful of one another’s autonomy.',
    meaningCareerUpright: 'When it comes to all things career oriented, the Queen of Pentacles tarot card can bring great success. She is a talented businesswoman who is practical, organized and very capable in anything she puts her mind to. In your life, she can appear as a successful person, who may make a great mentor, colleague or business partner. If you do choose to collaborate with her, you’ll find that her vast skill set will be invaluable to your career or your professional projects. If she offers advice, listen to it; she cares for you, and will help you accomplish your goals. ',
    meaningCareerReversed: 'Your career can be a bit chaotic right now, meaning that you may find it hard to get a stable income. Don’t be afraid to do as the Queen of Pentacles does, and get your hands dirty. Let her confidence in her capabilities inspire you. As a person, she may symbolize a colleague or a business partner, but one that may be lazy or terrible at managing her tasks. Be cautious, as she may create more problems that you would otherwise not need to solve. \n' +
      '\n' +
      'Sometimes, this card can also symbolize a person who is jealous of your work position, and may create problems for you covertly. Beware of gossip or envy.',
    index: 76
  },
  {
    name: 'Knight of Pentacles',
    description: "Much like the other court cards of this suit, the Knight of Pentacles revolves around work, effort, and a general responsibility. The Knight of Pentacles sits on a dark horse in a field. Unlike the other knights, who are always off on one adventure or another, this knight decides to stay home, and instead, focus on tilling the fields. He prepares for the next harvest - it is on this land that he believes that he can do the most. In his hands, he has a single gold coin. He gazes into it, and in his eyes we see a careful consideration. Perhaps he is dreaming of what it could bring him. The other knights may think he's a little boring, but this knight is more concerned about the long term future of his kingdom. ",
    keywordsGeneralUpright: [
      'practical',
      'reliable',
      'efficient',
      'stoic',
      'slow and steady',
      'hard-working',
      'committed',
      'patient',
      'conservative'
    ],
    keywordsGeneralReversed: [
      'workaholic',
      'laziness',
      'dull',
      'boring',
      'no initiative',
      'cheap',
      'irresponsible',
      'gambler',
      'risky investments'
    ],
    keywordsLoveUpright: [ 'loyal but stubborn lover', 'steady', 'secure relationship' ],
    keywordsLoveReversed: [ 'dull relationship', 'homebody', 'neglecting relationship' ],
    keywordsCareerUpright: [ 'focus and drive', 'slow and steady work', 'hard work' ],
    keywordsCareerReversed: [
      'little ambition',
      'too much ambition',
      'workaholic',
      'obsessed with work'
    ],
    meaningUpright: 'The Knight of Pentacles is about the daily tasks and the responsibility that one has to gain through a specific project. This knight has the patience to accomplish all his given duties and is considered by others reliable and committed to his work. To see this card is an indication that there is a need to be trustworthy and reliable.\n' +
      '\n' +
      'You are fully committed to your assignments and you make sure that you complete your work efficiently. You are absolutely loyal and do the best you can in order to make sure the job will be properly completed. Though your sense of duty is admirable, beware that it does not turn into perfectionism - which can manifest itself in every aspect of your life.The Knight of Pentacles can also represent routine, or the kind of general hard work that you go through everyday. The meaning of the Knight of Pentacles also advises that the querent should continue to do exactly what he is doing. Sticking with the tried and true methods, he will accomplish everything he has set out to do. Sometimes, going with what has already done is not necessarily bad.',
    meaningReversed: 'When the reversed Knight of Pentacles shows up in a reading, the traits that were once positive in the upright position are now taken to the extreme. You may feel stuck in your own routine, and bored of everything that surrounds you. You may desire a change of scenery in order to avoid this tiring repetition. The Knight of Pentacles reversed could also indicate that you have totally ignored many serious aspects of your life. Financial or personal issues are often be neglected in favor of work matters when this card appears reversed.\n' +
      '\n' +
      'You may be a driven and ambitious person who struggles to carry the weight of your responsibilities - so much so that you sacrifice your social life. Perhaps you can try taking more risks, or spend more time with friends and loved ones. The Knight of Pentacles reversed is a strong indication that you need to change this way of living, lest you risk burnout and exhaustion.',
    meaningLoveUpright: 'The Knight of Pentacles is hardworking and diligent. He is patient, reliable and steady, though sometimes deeply absorbed in his work. They prefer not to take risks in love, as well as elsewhere in their lives. It is difficult to get this person to change their minds; which means they can be stubborn, but also a very trustworthy and dedicated partner. The Knight of Pentacles tarot love meaning can also suggest a relationship that is deep and reliable, but not very exciting. If you’re at a point where you would like commitment, stability and security in your love life, this card can be a welcome sight. It indicates a partnership in which both of you will be working towards your long term goals together.',
    meaningLoveReversed: 'It may be that your love life is getting rather dull and stale lately. You may feel like a homebody that prefers to enjoy their time alone rather than take any emotional risks, and face possible rejection amongst others. If you’re in a relationship, you may feel a bit desperate for change. It may be that one of you spends so much time at work, or all their energy on practical, financial or career matters that they don’t prioritize the relationship. Make sure that the two of you carve out time in your busy lives to just be with one another, or try something spontaneous to bring a much needed breath of fresh air into your partnership.',
    meaningCareerUpright: 'When it comes to work, the Knight of Pentacles suggests ambition, drive and focus. You are very much committed to your goals, however far away in the future they may be. It’s likely that you’ll do anything you can do achieve them, so you’re prepared to put in the hard work and the blood, sweat and tears. You have a slow and steady approach, and believe that hard work is rewarded. Should you be searching for a job, you’ll need to prove your reliability and your dedication to a prospective employer.',
    meaningCareerReversed: 'Are you lacking in ambition? Do you find that you have little motivation when it comes to work? One possible meaning of the reversed Knight of Pentacles is that you’re not working hard enough to make your career dreams come true. Alternatively, you may be so obsessed with your career goals, that you sacrifice everything else to achieve them. Your love life may be in shambles, you may barely meet friends, and have all but forgotten close family members. Do you still remember how to have fun? It may be better in the long run to develop a better work-life balance. Don’t burn yourself out. ',
    index: 75
  },
  {
    name: 'Page of Pentacles',
    description: 'The Page of Pentacles card depicts a youth standing all by himself in a wide field surrounded by flowers. In the background, you will also notice several lush trees and a furrowed field. The young man seems to be walking in a slow manner and appears unaware of his surroundings, for his attention is completely captured by the coin he is holding, and all that it represents: ambition, security, wealth, nature, and sensuality. The Page of Pentacles symbolizes a person who is grounded, loyal and diligent.',
    keywordsGeneralUpright: [
      'ambitious',     'diligent',
      'goal oriented', 'planner',
      'consistent',    'star student',
      'studious',      'grounded',
      'loyal',         'faithful',
      'dependable'
    ],
    keywordsGeneralReversed: [
      'foolish',
      'immature',
      'irresponsible',
      'lazy',
      'underachiever',
      'procrastinator',
      'missed chances',
      'poor prospects'
    ],
    keywordsLoveUpright: [
      'quiet',
      'steady',
      'diligent lover',
      'dedication in relationship'
    ],
    keywordsLoveReversed: [ 'lack of commitment', 'boredom', 'monotonous relationship' ],
    keywordsCareerUpright: [ 'making plans to achieve ambitions', 'big dreams', 'training' ],
    keywordsCareerReversed: [
      'avoiding work',
      'lazy',
      'unmotivated',
      'wants success without work'
    ],
    meaningUpright: 'When we meet the Page of Pentacles, we see immediately that she is one that is ambitious and focused. She is protected, nourished, provided for by the suit whose name she bears. Guided by it, she is deeply tied to the earth, nature, and all of its gifts. She cherishes the body, for it too is something which is a manifestation of her element. Her diligence, ambition and loyalty drives her to quickly make plans for the future - for it is there where her focus lies.\n' +
      '\n' +
      'When you meet her, she may be the bearer of news connected to all earthly and material matters. When you hear her message, be inspired as she is - lay down the foundations to follow your ambitions.\n' +
      '\n' +
      'Generally, the Page of pentacles refers to the kind of energy that you need to complete all that is needed for your work. It may point to the determination, focus and the ability to stick with a particular task no matter how boring it may seem. In terms of work, the Page of Pentacles may signify that there are a lot of tasks you are responsible for, but your time to complete them is much too limited. This is not the time to feel stressed and overwhelmed. Assistance will be there for you, you just have to ask for it. In relation to finances, the Page of Pentacles can refer to the reward for your hard work. For those who are investing their hard–earned money, this is not the perfect time for you to take the risk. Invest your money in a safe and traditional way - the diligence will pay you back. If you are currently experiencing a health issue, this problem may be the result of the continuous neglect. Let a professional make sure that this is not the case.',
    meaningReversed: 'When the Page of Pentacles card appears reversed, it may point to your lack of focus. There is a possibility that you are being distracted with lots of things. Try to borrow the talents of this page and focus your mind before moving on the next thing.\n' +
      '\n' +
      'It may also indicate that you need to give yourself a break to refresh your mind. With regards to work, the Page of Pentacles reversed may signify that you are currently feeling overwhelmed due to the heavy demands in your workplace. Remember that it is always better to ask for assistance and complete the work rather than to try to finish it all by yourself and end up failing to do so. In terms of love, you are probably in a solid and steady romantic relationship, but perhaps someone else has caught your interest lately. When it comes to your finances, the Page of Pentacles reversed may refer to that urge to play and gamble. Be sure to stay responsible and be in control of your actions. In terms of health, do your best to stay away from dangerous activities.',
    meaningLoveUpright: 'The person symbolized by the Page of Pentacles is ambitious, loyal and practical; they may often be seen as studious, but once you get to know them well, they can also be quite funny. Their ambition and focus means that they are hardworking. They are likely to be as dedicated as they are to a lover, as they are to their goals. Their quiet demeanor may make them hard to notice at first, compared to other folks that may be more out going.\n' +
      '\n' +
      'If this doesn’t represent a person that is entering your love life, the Page of Pentacles tarot love meaning can simply signal this Page’s dedication and loyalty in your relationship. While sometimes the relationship can lack passion and feel a bit boring, the love is there; you may only need to go out there and figure out how to inject some fun and excitement back into your romance. Try not to always put practicality before passion in the relationship and the two of you should be just fine.',
    meaningLoveReversed: 'The reversed Page of Pentacles tarot love meaning can signal a lack of commitment and dedication when it comes to matters of the heart. Instead of focusing on long term companionship, you may find yourself easily distracted by every new person. There’s nothing wrong with this, but make sure set clear expectations and not lead potential lovers on. Other times, this card can point towards an ambivalence to dating. If you’re in a relationship, this Page can suggest a relationship that has become stagnant and monotonous. There can be frustration stemming from this boredom. You and your partner will need to work hard to remain together and remember why you two fell in love in the first place.',
    meaningCareerUpright: 'You may now be building a strong foundation for success. You’re likely to be creating your goals, planning strategies and putting those plans into action. You’re not afraid to put yourself out there in order to achieve your wildest dreams. It is likely that there are lots of work opportunities available for you, so go ahead and reach for them! Sometimes, this card can also suggest that you are going through or looking to start a higher education program. Study hard; if you do the work, you’re likely to do an amazing job.',
    meaningCareerReversed: 'Bad news can be coming when the Page of Pentacles is reversed. You may be neglecting your work or your studies right now, meaning that your foundations for success is feeling rather shaky. You may day dream about being successful, but when it comes to putting in the work, you can be lazy and unmotivated. Sometimes this comes from unrealistic ideals about success. We often see the result, but not the back-breaking work it takes to get there. Be realistic about what you want to achieve, and whether you are willing to sacrifice to get there. If you’re currently in school, you may not be doing well, or putting in your best effort.  ',
    index: 74
  },
  {
    name: 'Ten of Pentacles',
    description: 'In the Ten of Pentacles card, there is an old man seated in an archway leading into a great estate. It seems he is the head of the family, for he is surrounded by younger loved ones. He wears a robe that is decorated with moon crescents and grapevines - indicating the joining of spirit and matter. He has his family and dogs with him. There is a happy couple in front of him, presumably his children and a playful child behind this couple, his grandchild. The child playfully reaches out to pet the dog.',
    keywordsGeneralUpright: [
      'legacy',      'roots',
      'family',      'ancestry',
      'inheritance', 'windfall',
      'foundations', 'privilege',
      'affluence',   'stability',
      'tradition'
    ],
    keywordsGeneralReversed: [
      'family disputes',
      'bankruptcy',
      'debt',
      'fleeting success',
      'conflict over money',
      'instability',
      'breaking traditions'
    ],
    keywordsLoveUpright: [
      'financially stable couple',
      'relationship milestones',
      'family approval'
    ],
    keywordsLoveReversed: [ 'conflict between love and family', 'outside opinions of love' ],
    keywordsCareerUpright: [ 'creating lasting career', 'stable future' ],
    keywordsCareerReversed: [ 'company dissolution', 'debt', 'unstable career' ],
    meaningUpright: 'The Ten of Pentacles deals with permanence and satisfaction. The card shows that everything you have put your efforts into for a long time will pay off in the future. It suggests that everything will work out well in the end - for you have always kept the long term picture in view, choosing to take no shortcuts. Your legacy is sure to stand for quite a long time to come. This is a relief, for the path to get here has been filled with setbacks and challenges, making this point of the journey even sweeter.\n' +
      '\n' +
      'In the card, the aged man is able to sit back and relax while watching the lives of his children and grandchildren. The satisfaction he derives from his achievement is interwoven in his children’s happiness. The meaning of the Ten of Pentacles also relates to the happiness that you experience because you have planted many seeds of happiness and shared in the lives of others, particularly family members and relatives. It points to the importance of these people in your lives. The Ten of Pentacles symbolism is rooted in both financial success and stability. It shows affluence and lack of financial struggle. It also implores you to make decisions that will not only have positive results in the present but also in the long term. The decisions that you make should produce positive results that last for generations to come, trickling down to your offspring as well.',
    meaningReversed: 'The Ten of Pentacles reversed meaning may be a warning about your future financial status. It could point to problems and hiccups later on in life, even though they may not currently be an issue. It could also show the faulty nature of an investment that you have put a lot of time and effort in. In general, this reversed card seems to signal that you are placing too many bets on your short-term success, while harming your long-term potential. Take a step back and evaluate whether your decisions right now will lead to more damage in the future.\n' +
      '\n' +
      'The Ten of Pentacles reversed meaning can also deal with relationships. It could show the sudden end of a marriage that has been going strong for years. It could also show that you have hit a rough patch, but there is still hope for things to get back on track. For those who are single, it could point to the fact that some of your relationships have been great for short term fun, but lack the substance to lead to lifelong commitment.',
    meaningLoveUpright: 'If you’re in a relationship, the Ten of Pentacles tarot love meaning can indicate abundance, affection and luck as a couple. From both an emotional and material standpoint, the two of you are in a strong position. It is likely that you have a strong foundation now for family, should you choose to have one. That idea may indeed be on your mind; you may be working together on moving in together, buying a house, or starting a family.\n' +
      '\n' +
      'If you’re single, it might be that your family’s approval may have a strong effect on who you choose as a partner. Your extended family may be very important to you, and having a harmonious relationship between them and your romantic interests is important to you. You are searching for something long-term, and you recognize that marriage is sometimes not just about love, but about joining two families together.',
    meaningLoveReversed: 'Are you placing too much importance on what your family or others think about your partner? In an effort to find love, you may be searching for outside approval as well, instead of focusing on the emotional connection between the two of you. On the other hand, there may be conflicts between your lover and your family or friends. They may find that your partner is “unsuitable”; they may not have a good enough job, they may come from a different background, they may not be the Prince Charming that your family needs to show off how well their child is doing. Conflict now can have a great effect on your partnership, and you may have to assert your boundaries instead of accepting their opinions without thinking yourself.',
    meaningCareerUpright: 'If you have a business, you are in the process of building something that is lasting. The Ten of Pentacles can also suggest something about a family business. If you’re not a business owner, worry not - the Ten of Pentacles also signals that your job and career track is one that is quite secure and can provide for you financially in the long term. This reliable job may be in a large, traditional company with a long history. ',
    meaningCareerReversed: 'If you own your own business, things may not be going well for you. In the worst case scenarios, it can suggest the dissolution of a company, debt, or bankruptcy. It may be time to revisit your business decisions and see what you can salvage. When it comes to careers, the Ten of Pentacles suggests that your job may be unstable, especially for the long term. You may find better prospects somewhere else. ',
    index: 73
  },
  {
    name: 'Nine of Pentacles',
    description: 'The Nine of Pentacles depicts a woman in the middle of a vineyard. The woman wears what appears to be a long, luxurious dress adorned with sunflowers. She seems to be part of a wealthy house, for in the far background, we see a castle. A falcon is sitting peacefully and playfully on her left hand. The vines behind her are rich and filled with grapes and golden coins, signaling that she has been very successful in her ventures, which are yielding a great and plentiful harvest.',
    keywordsGeneralUpright: [
      'rewarded efforts',
      'success',
      'achievement',
      'independence',
      'leisure',
      'material security',
      'self-sufficiency'
    ],
    keywordsGeneralReversed: [
      'being guarded',
      'living beyond means',
      'material instability',
      'reckless spending',
      'superficiality'
    ],
    keywordsLoveUpright: [
      'high standards for partners',
      'balance of love and independence'
    ],
    keywordsLoveReversed: [ 'fear of giving up independence', 'being guarded in love' ],
    keywordsCareerUpright: [ 'achievement in career', 'hard work paid off', 'success' ],
    keywordsCareerReversed: [ 'desire to succeed without work', 'no work-life balance' ],
    meaningUpright: 'This Nine of Pentacles card indicates that the querent has reached a stage in their lives where they are confident, independent and self-sufficient. Through hard work, this person is now ready to enjoy money, leisure and material comfort. The difficulties that were faced in the earlier journey of the pentacles appear to be over. The Nine of Pentacles conveys not only joy, but also the feeling of security and freedom that material wealth can bring. Looking back, the querent can now celebrate the difficulties, the struggles, and the hard work that lined her path. Her previous challenges gave her the wider perspective she needs to understand the spiritual value of her success. Knowing how difficult it was to get here, she intends to enjoy every single day that is given to her.\n' +
      '\n' +
      'Like the other nines in the tarot, sometimes this card indicates that the querent has not yet reached completion in their journey. There is something that is missing here - the element of her community and relationships. The gifts of the suits are meant to be shared, and yet this woman is so far from home.The Nine of Pentacles can also be about a specific time period of this person’s life. This time is about restraint and grace. Diplomacy and grace will lead to the desired outcome. ',
    meaningReversed: 'The Nine of Pentacles reversed can be indicative of suffering from financial issues. It can perhaps indicate a false display of security and stability. There may be a desire here to keep up appearances - to have all the finer things in life even when we cannot afford to do so. Where does this stem from? \n' +
      '\n' +
      'Take this as an opportunity for you to figure out what it is most important. The Nine of Pentacles reversed indicates a moment when one truly sees - perhaps for the first time, that we cannot depend completely on material wealth to bring happiness.\n' +
      '\n' +
      'Other meanings of this card differ with context - you may instead find yourself at a period in life where you should be able to rest and relax after years of hard work, but you find yourself unable to unwind. In this case, rejuvenation is the ultimate advice of the Nine of Pentacles reversed. You need to take a few steps back and allow yourself to rest and regain your strength.',
    meaningLoveUpright: 'Life has been kind to you; and you may at the moment be experiencing a time of luxury, or at least, having everything that you need. Even if you’re not partnered right now, romance doesn’t seem particularly pressing to you. You may just be seeking to appreciate what you have. This quality can make you even more attractive to others; lovers found now will need to make sure that they contribute to that happiness, not take away from it. Those who are already in a relationship may find that each person has their own achievements, careers, hobbies, interests and social life; there is a healthy mix of independence and love amongst you two. Sometimes, this card can also point towards you and your lover working on your home together, and creating a space that is truly yours.',
    meaningLoveReversed: 'While it may look like you have it all right now, the reality may not be the case. The reversed Nine of Pentacles tarot love meaning can signal a feeling that despite having everything, your life is still missing something. Those who are single may be well aware of this; you may have a good career, stable finances, good friendships and relationships with family, but love still evades you. Sometimes, this can be unconscious; you may be worried about giving up your independence, or perhaps afraid of sharing your life with someone who will not love you for who you are, but what you have. You may not even realize that you are pushing others away. If you’re in a relationship, you may still feel guarded, despite your best efforts and desires to spend your life with this person. The reversed Nine of Pentacles asks you to open up; and address what you are fearing, so you can experience love without fear.',
    meaningCareerUpright: 'This card suggests that you have achieved much in your career, and you are rewarded accordingly; abundance, success and financial rewards are all rightly earned. All your hard work and professional attitude have paid off, and you can now take the time to sit back and enjoy your success. Your business may be flourishing, and the profits may let you live comfortably. Sometimes, this card can also symbolize a retirement, or taking a vacation after a time of consistent work and labor. ',
    meaningCareerReversed: 'If you’ve dealt with any failures lately, it may be because you haven’t put in too much effort. The Nine of Pentacles can suggest that you desperately desire success, but may not be ready to actually work for it. On the other hand, this card can indicate that you may have worked so hard that everything else has fallen by the wayside. Time passes quickly, and before you know it, everything can change. Take some time to review your finances, if you have a business. You need to make sure that the people that you work with are trustworthy. Take time to check your legal documents to be safe as well.  ',
    index: 72
  },
  {
    name: 'Eight of Pentacles',
    description: 'The Eight of Pentacles card depicts a young man who is etching a pentacle shape into the eight golden coins. The card symbolizes someone who is completely focused and absorbed in what they are doing. The town that is far in the background means that he successfully isolated himself from the distractions so that he can fully concentrate on his task. The Eight of Pentacles refers to that moments in your life when you are dedicated to completing a certain task. You are fully-immersed, and you are committed in delivering the best version of your work. ',
    keywordsGeneralUpright: [
      'skill',
      'talent',
      'craftsmanship',
      'quality',
      'high standards',
      'expertise',
      'mastery',
      'commitment',
      'dedication',
      'accomplishment'
    ],
    keywordsGeneralReversed: [
      'lack of quality',
      'rushed job',
      'bad reputation',
      'lack of motivation',
      'mediocrity',
      'laziness',
      'low skill',
      'dead-end job'
    ],
    keywordsLoveUpright: [ 'achieved relationship goal', 'cultivating relationship' ],
    keywordsLoveReversed: [ 'not putting effort into love', 'neglecting relationship' ],
    keywordsCareerUpright: [
      'dedication',
      'promotion',
      'developing skills',
      'showing talent'
    ],
    keywordsCareerReversed: [ 'little motivation', 'tedious job', 'low quality work' ],
    meaningUpright: 'This card indicates a time that you have to work hard and focus entirely on your tasks. This is not necessarily a negative situation, but this means that you must really strive to be the best. The task that you need to accomplish can be personal or professional. No matter what type of task it is, do not be afraid to ask for help when things get overwhelming. The Eight of Pentacles refers to the efforts that you undertake. There is a possibility that there will be a lot of things that you need to address. Hard work is essential, but you still need to find a balance.\n' +
      '\n' +
      'When it comes to work, those who are seeking employment should expect that the nature of their job will be demanding. The Eight of Pentacles also indicates that you need to be confident in yourself that you will be able to fulfill the job. For those who are currently employed, you will be responsible for carrying out more tasks and responsibilities. Never hesitate to ask the assistance of your co-workers. In terms of love, your work may possibly be affecting your relationship. Regardless of how demanding your job is, you need to make some time for your emotional connections with other people.On the matters of finances, The Eight of Pentacles may signify financial assistance that you have been hoping to receive. Be careful on how you are going to spend this money, remember that this is a fruit of your hard labor and not luck. When it comes to health, the Eight of Pentacles can mean that it is time for you to commit and work hard in order to improve your health - you must stay vigilant about exercise and diet.',
    meaningReversed: 'When reversed, the Eight of Pentacles signifies something similar to the upright position, but the tasks may be even more demanding. This means that you need to execute swiftly and with great care if you want to be happy and successful with this outcome. In terms of work, the Eight of Pentacles reversed refers to the importance of impressing your employer through your diligence, dedication and intelligence. Never avoid any task or responsibility in your work - or else this can damage your reputation. In love, the Eight of Pentacles may reveal that both of you may not be prepared to handle the responsibilities to make your relationship work\n' +
      '\n' +
      'With regards to finances, you may be delusional about your current financial state. Perhaps you are currently relying on pure luck to make it. While there is absolutely nothing wrong with dreaming, you should understand that you should be patient and be ready to work hard if you want to improve your standing. In relation to health, the Eight of Pentacles reversed may point to a situation that is worrying you, but you have no idea how to fix it. Never be afraid to ask the help of a medical professional to help you understand your condition and improve.',
    meaningLoveUpright: 'If you think about it, loving someone is like cultivating a skill. It requires ever increasing amounts of empathy, compassion, patience and also curiosity and the desire for self-improvement. Be proud for what you have accomplished, and the lessons that you have learned. If you’re in a relationship, you may find that your lover is still surprising you, even all the time you have spent together. There are still new facets of them that you discover every day, if you look hard enough. Maybe you fell in love with them for their sweet kindness, only to see their passion erupt when they are confronted with danger, or something that violates their principles. Learning to appreciate those new sides of them are something that can deepen your love for one another.',
    meaningLoveReversed: 'You can’t cut any corners, or take any shortcuts when it comes to love. The reversed Eight of Pentacles tarot love meaning is a reminder that the effort we put into our relationships and our love life matters. We can either devote ourselves to them, and patiently watch it flourish under our care, or we can take it for granted, and let it eventually die. This means that your relationship or romantic life may require a lot from you right now. It may be that your partner may need you to step up; have you been doing your part of the chores? Have you been expressing your affection? Have you shown your love as much as you have been accepting love? Try and make sure that both your needs are being met.',
    meaningCareerUpright: 'When it comes to work, your dedication and commitment to improving your skills is likely to be rewarded. Career goals can be met now, and you may be achieving a new level of skill and expertise. Others may appreciate how much you’ve grown, and can look up to you as a leader in your field. Sometimes, this card can also indicate a promotion. If you’re in the process of starting your own business, your craftsmanship and care for your work will lead towards great success and profit. Keep your skills sharp, and remain curious. If you’re currently in a period of study, your talent may impress others right now.',
    meaningCareerReversed: 'You may be stuck in a tedious job that you hate right now. Having little enthusiasm is likely to affect how much effort you put into your job, and it’s likely that your work suffers. You may feel like you are in no hurry to make any changes however. The work you are doing feels bland, and you are no longer concerned with improving your skill set. Instead, you can just be dragging your feet, waiting for the time to clock out and collect a paycheck. Employers right now may feel that you lack the experience needed for new positions. If you have a business, quality standards may fall, and your reputation may be damaged as a result. ',
    index: 71
  },
  {
    name: 'Seven of Pentacles',
    description: "The Seven of Pentacles shows a young man who seems to be taking a break from his hard labor to admire the fruit and blossoms in his garden. He rests on his shovel as he is admiring the seven pentacles hanging from the lush green vegetation. The way that he is laying his head over hands seems to suggest a kind of fatigue - he has worked hard to make sure that this year's crop is a good one. Because he is focused on long term goals, he cannot touch his harvest right now, and only reserves one of the pentacles for himself, choosing to invest the others. With his efforts, he hopes to grow his crop for the long term. ",
    keywordsGeneralUpright: [
      'harvest',
      'rewards',
      'results',
      'growth',
      'progress',
      'perseverance',
      'patience',
      'planning'
    ],
    keywordsGeneralReversed: [
      'unfinished work',
      'procrastination',
      'low effort',
      'waste',
      'lack of growth',
      'setbacks',
      'impatience',
      'lack of reward'
    ],
    keywordsLoveUpright: [ 'putting work into love', 'friendship turns to romance' ],
    keywordsLoveReversed: [ 'no results from love', 'can’t force love' ],
    keywordsCareerUpright: [ 'progressing to goals', 'evaluating progress' ],
    keywordsCareerReversed: [ 'no results in work efforts', 'stagnant career' ],
    meaningUpright: 'The meaning of the Seven of Pentacles relates to investment and effort. It follows the Six of Pentacles which refers to the end of financial or material hardship. If you have been putting in time and effort in your work, it signifies that your efforts are paying off and they are going to pay off in the future as well. If you are looking to invest, the Seven of Pentacles suggests that you are ready to put in a lot of effort, time and work into whatever you want to achieve. It reaffirms you of your long-term vision and helps to show that you are not confined to seeing results in the short term only. It shows how much you value the investment because of the effort that you are willing to put in.\n' +
      '\n' +
      'The Seven of Pentacles is also related to fear of failure. You do not know whether you are going to reap fruit from your hard work. It could also signify frustration when there is a delay. You may have been putting a lot of effort into your projects, but it does not seem to bear any fruit right now. The good thing is that it means that you are learning from your failures and mistakes. It may initially not seem like it, but mistakes allow you to look into how to better invest your time to get the most out of your future ventures.',
    meaningReversed: 'The Seven of Pentacles reversed means that your returns may be scattered for now. It could also mean that the rewards of your labor are not as significant as you thought. The advantage of this is that it shows that you know when to stop investing your time, money or energy in a particular project. You, therefore, need to reevaluate your choices, and figure out where you should put your resources. The Seven of Pentacles reversal meaning could also be applied to relationships and the effort and emotions that you have invested.\n' +
      '\n' +
      'The Seven of Pentacles symbolism often deals with business ventures and investments. However, it also cuts across relationships, viewed as investments as well. The effort put into these investments could be time, money and hard work.',
    meaningLoveUpright: 'With the Seven of Pentacles tarot love meaning, love can be slow to flourish. For those that who are single, long term friendships can slowly turn into romantic love. Friendships that you may make now can also be the seeds of something more. Love can sometimes be exhausting, but the rewards that come after are invaluable. If you’re in a relationship, life together now may seem tedious or grueling. Perhaps in order to be together, your partnership may require working out long term plans or creating compromises in your routine or finances. But this card is also a reminder that love isn’t always passionate romances and outbursts of emotions, but it is also partners putting in the work every day to remain together within an ever-changing world. Over time, all the tedious moments, all the hard work, will be something to be looked back at fondly. After all, these were the things that let your love grow to something as beautiful as you have now.',
    meaningLoveReversed: 'You may be ready to throw in the towel, when the reversed Seven of Pentacles appears in a love tarot reading. You may have toiled for love and romance, putting in so much effort, only to see little come from it. It can suggest a certain amount of impatience, when one certainly cannot force love to magically arise. Some loves come suddenly, and others can take time; we can only be patient and hope for the right moment. Whether reversed or upright, the Seven of Pentacles tarot love meanings signals slow but steady progress, so much so that you may not even notice it. But keep nourishing that love, and one day you may find it having a profound influence on your life.',
    meaningCareerUpright: "Regardless of whether you see results or not, the Seven of Pentacles signals that progress is being made. It may be slow, but every day your work pays off. It can be helpful now to take a closer look at your achievements, and look at what is working and what isn't. This may help you understand where to focus your energy, and what strategies you can have going forward. If you own your own business or are self-employed, taking the time now to evaluate your work will be helpful, and can create a firm foundation for future growth. ",
    meaningCareerReversed: 'Are you putting way too much effort at work? Or are you not putting in enough? The reversed Seven of Pentacles can signal some kind of imbalance when it comes to your career. It seems that regardless of the answer, nothing you do (or don’t do) seems to change anything. Results are minimal. Spending too much time at work can sometimes be counter productive, like overwatering a plant; giving too much attention to something can kill it. On the other hand, you may be too distracted to focus on one particular strategy for success. With your efforts being diluted, nothing much is likely to come from them. You’ll need to focus on one method, and do the research to make sure it works. ',
    index: 70
  },
  {
    name: 'Six of Pentacles',
    description: 'In the image on the Six of Pentacles, there is a man who is dressed in purple robes. The color purple symbolizes is the status and wealth of this man. He has a scale that is balanced in one hand, which stands for equality and fairness. We are reminded of the Justice tarot card, which suggests karma, cause and effect, and that we receive what we give. His other hand is giving money to two beggars who are kneeling at his feet. The Six of Pentacles suggests that you are in a secure enough position to give to others without affecting your own stability. ',
    keywordsGeneralUpright: [
      'generosity',
      'charity',
      'community',
      'material help',
      'support',
      'sharing',
      'giving and receiving',
      'gratitude'
    ],
    keywordsGeneralReversed: [
      'power dynamics',
      'abuse of generosity',
      'strings attached gifts',
      'inequality',
      'extortion'
    ],
    keywordsLoveUpright: [ 'supportive relationship', 'generous lover' ],
    keywordsLoveReversed: [
      'unfair power dynamics',
      'taking advantage of love',
      'controlling lover'
    ],
    keywordsCareerUpright: [ 'mentor', 'being a valued employee', 'investors' ],
    keywordsCareerReversed: [ 'hidden agendas', 'quid pro quo', 'sucking up to bosses' ],
    meaningUpright: 'The Six of Pentacles means is that you are in a position where you have a good relationship with your income. Like the main figure in the card, the amount of money that you bring in and your expenses are balanced well, and you are fortunate enough to not have any stress. You are also grateful for all that you own and can happily share your wealth with others. As you can tell from the imagery in the card, the Six of Pentacles can be about charity. You can either be the man giving away money to the needy, or a beggar gratefully receiving what you need from wealthy donor.\n' +
      '\n' +
      'If the card is showing that you are the giver, you have built up wealth, and you are now able to help others with financial assistance. You may have lived long enough in the darkness of the Five of Pentacles to be able to see the light. You are thinking about giving to charities or helping someone who could need your support and was in the same position you were before. The Six of Pentacles does not have to be about material gifts or money, it can also mean your time and presence. If the card is showing you are one of the beggars, you could be receiving someone else’s charity. This could help you recover, so take the help - you will be able to repay the kindness in the future. You may also be able to find ways of becoming self-sufficient in the future. Despite this situation, you should be mindful that you should not become desperate or submissive during this time.',
    meaningReversed: 'The Six of Pentacles reversed can suggest that charity can be one-way. If you have loaned someone money, you should not be expecting your money to be paid back, or your favor to be returned in the future. You should be cautious about the people you are lending money to, especially if you are not financially stable. You could also have problems with spending and giving away more than you can really afford. The Six of Pentacles reversed can also warn you about the debts that you have. This could mean that you are in over your head and it is going to come back and be a major problem in the future. You should also be careful of entering business endeavors during this time because you could end up with a huge loss, instead of getting a return on your investment. The last Six of Pentacles reversal meaning is that there is selfishness related to giving and charity. This may mean that you are willing to give others in a way that is not to benefit them, but to benefit yourself. You should be cautious that you are not just being charitable to prove you are giving or generous to others. The source of generosity should be selfless, not selfish.',
    meaningLoveUpright: 'Kindness and generosity characterizes your relationship, with the Six of Pentacles tarot love meaning. Your partner may be very supportive of you emotionally and financially as you are pursuing your goals. You may be going to school, or starting a new business venture, but perhaps a bit fearful on what the risk could do to your partnership. But you may find a happy surprise in your partner’s willingness to help you achieve that goal. Remember however, to keep the partnership balanced. Be giving and reciprocate to your partner in other ways, to show how much you appreciate them. In this way, your relationship thrives. If you’re single, you may find that you or another person’s generosity with energy, time or resources can lead to love.',
    meaningLoveReversed: 'Power dynamics and imbalances can create big problems within your relationship with the reversed Six of Pentacles tarot love meaning. Should one partner always be giving and giving, and the other receiving, one person can feel taken advantage of and resentful, while the other can feel trapped and dependent. It is always important to maintain a level of independence and self-sufficiency in the relationship. The dynamics here must be corrected again in order for this relationship to become healthy. Those who are single may want to be wary of partners that create this power imbalance; avoid being too generous or too dependent on your romantic relationships.',
    meaningCareerUpright: 'If you draw the Six of Pentacles in a work tarot spread, there may be a more senior person at your workplace that is ready to help you achieve your career goals. This mentor can be very generous with their time and their energy in helping you succeed, and attain more skills and a higher status within your career path. The Six of Pentacles can also signal that your workplace puts a high value on your contributions. If you’re looking for a new job, this card can suggest that the changes will be even better than you expected. If you own your own business, this card can suggest investors, or folks that are willing to help you grow your business.',
    meaningCareerReversed: "Beware of people in your workplace that can seem helpful and generous, but may have hidden agendas. Someone may abuse their position of power, or offer you help. But these create the circumstances for feeling that you 'owe' them later on. They may ask you to do something at the cost of your honor. If you’re someone with power, remember to give your help without asking anything in return; you must have memories of what it was like when you were younger. If you’re someone that is receiving help, be sure not to abuse that help. Are you sucking up to someone whose position or status can aid you? This may be more obvious to others than you think. Avoid that temptation and remain honest with yourself and others. ",
    index: 69
  },
  {
    name: 'Five of Pentacles',
    description: 'Just like the fives of the other suits in the tarot, the Five of Pentacles symbolizes adversity. It shows two individuals walking outside while it is snowing. Not only are they cold, they are also sick, poor, tired, and hungry. It looks as if they are lacking the basic necessities of life. A lot of people can relate to the two individuals in more ways than one. One of the individuals in the card has crutches, while the other figure has a shawl covering her head. She is walking barefoot in the snow. There is a black wall in the background with a stained glass window featuring the five pentacles, suggesting a church of some kind.More often than not, the Five of Pentacles is a bad omen. However, do not fret, as it can change depending on where it is placed in the reading.',
    keywordsGeneralUpright: [
      'hardship',
      'loss',
      'isolation',
      'feeling abandoned',
      'adversity',
      'struggle',
      'unemployment',
      'alienation',
      'disgrace'
    ],
    keywordsGeneralReversed: [
      'positive changes',
      'recovery from loss',
      'overcoming adversity',
      'forgiveness',
      'feeling welcomed'
    ],
    keywordsLoveUpright: [ 'isolation', 'loneliness', 'feeling distant', 'depression' ],
    keywordsLoveReversed: [ 'improved love life', 'opening yourself to others' ],
    keywordsCareerUpright: [ 'work hardships', 'isolation from colleagues', 'outcast' ],
    keywordsCareerReversed: [ 'friendship at work', 'end of work hardships' ],
    meaningUpright: 'Whenever the Five of Pentacles shows up in a reading, it suggests a time of hardship and insecurity. The meaning of this card can be deep loneliness, illness, poverty or loss. Your status might take a turn for the worse in the near future. There is a chance that you will lose something significant, whether it is financial wealth or an important item. Deterioration of your health might be already ongoing or be very sudden.\n' +
      '\n' +
      'The person with crutches has a lot of symbolism. This person may be feeling cursed - that their bad luck is something that they can’t shake off easily. The Five of Pentacles symbolism can also be that of old debts, high credit card balances, or unpaid loans. It is a reminder that you should consider sorting out your finances. Mistakes you have made in the past might also haunt you.The Five of Pentacles is not a good sign when it comes to questions relating to love. It can be an indicator that the person you love is not feeling the same way. And just like the figures on the card, you might feel like you were left out in the cold.',
    meaningReversed: 'Unlike the upright version, the Five of Pentacles reversal meaning can be a positive one. The snow is now on top, which represents brightness coming into your life. The stained glass now symbolizes a passageway with the Pentacles serving as the light at the end of the tunnel. The reversed Five of Pentacles means change is coming. When drawing this card, it can mean that the worst is now over, but don’t expect changes to happen overnight. It will take some time before you can recover, and find strength once again. This means you will be able to regain stability in terms of property, health, relationships, business, or finances. Slow recovery from illness can be indicated by the Five of Pentacles reversed as well. You will be able to find a treatment that can lead to recovery. If you are caring for someone, then it can mean that help will be made available, whether it is financial or practical assistance.',
    meaningLoveUpright: 'It may seem right now that you’ll never find the love you are searching for with the Five of Pentacles tarot love meaning. Singles may be in a period of despair, ready to give up their long search for the right partner and give into their loneliness. Unfortunately, this attitude can be a self-fulfilling prophecy. Feelings of isolation or scarcity can appear in existing relationships as well, whether it comes from within one’s partnership or outside of it. Lovers may find it difficult to communicate honestly, or be emotionally close to their partners, creating a wall between one another. Depression may be an issue as well. Sometimes this card can signal a lack of financial security, creating strain in your romantic relationships. This may be a difficult time, but it is more important than ever to draw close together, instead of pulling apart.',
    meaningLoveReversed: 'A period of isolation, rejection and despair may be coming to an end. The reversed Five of Pentacles tarot love meaning can suggest that your relationship or your dating prospects are improving again, as you have worked to prevail over difficult circumstances. As struggles are lightening, you can make steady progress in rekindling your relationship, or opening yourself up to new people.',
    meaningCareerUpright: 'The Five of Pentacles appearing in a career or work context can spell trouble. You may be going through a period of hardship at work, perhaps through losing a job, or feeling alone and abandoned at work by colleagues or bosses. Others may treat you like an outcast, and you may struggle with office politics and being social. If you’re a business owner, you may also be struggling. All these issues may be severely affecting your mental health, and it can be a downward spiral. If you believe that this situation won’t change, you may want to start looking for another job. ',
    meaningCareerReversed: 'If your career or business has been going through problems, the reversed Five of Pentacles can suggest that there is a light at the end of the tunnel. Things are likely to return back to normal. Difficult situations can now be healed, or you may have found another job that values you for what you do. Look out for any opportunities.',
    index: 68
  },
  {
    name: 'Four of Pentacles',
    description: 'This card depicts a man who is sitting on a stool, who is holding onto two pentacles in a very defensive and tight posture. It’s almost as if he is hoarding them out of fear of loss. One pentacle is balanced precariously on his head, while another one is tightly clutched between his own hands, and there are two of them which are securely placed underneath his feet. He is making sure that there is absolutely no one touching his coins. At the same time, he is also unable to move because he is holding the coins so tightly. In other words, he is restrained from acting because he is holding too tight to his possessions. To some, money does not always bring freedom.',
    keywordsGeneralUpright: [
      'possessiveness', 'insecurity',
      'hoarding',       'stinginess',
      'stability',      'security',
      'savings',        'materialism',
      'wealth',         'frugality',
      'boundaries',     'guardedness'
    ],
    keywordsGeneralReversed: [
      'generosity',
      'giving',
      'spending',
      'openness',
      'financial insecurity',
      'reckless spending'
    ],
    keywordsLoveUpright: [
      'clingy lover',
      'jealousy',
      'feeling insecure',
      'holding onto past'
    ],
    keywordsLoveReversed: [ 'overcoming jealousy', 'release from past lovers' ],
    keywordsCareerUpright: [ 'impostor syndrome', 'paranoia', 'avoiding collaboration' ],
    keywordsCareerReversed: [ 'generosity with colleagues', 'risky work decisions' ],
    meaningUpright: 'The Four of Pentacles card is capable of generating both negative and positive perceptions. On one hand, the card signifies that you have successfully managed to accomplish much of your goals and you have managed to attain a significant material wealth in the process. However, on the other hand, there is a significant chance that you will start valuing things only for their material worth. You have worked hard to get to the point where you are now, and it is absolutely natural for your to desire to make sure that you remain stable. But this also has a chance to turn you into an overly possessive or greedy person who wants to ensure that no one is capable of taking away your own wealth.\n' +
      '\n' +
      'The Four of Pentacles is also a card which shows that you are currently in a position in which you have solid investments and that you are financially stable. Because of your new-found wealth, you are being particularly conservative about money, and you are most definitely not inclined to gamble when it comes to any kind of financial matters. You are protective of what you have managed to accumulate throughout time, and you desire to steadily increase your overall net worth.\n' +
      '\n' +
      'Be aware that without risk, there is no reward - if you spend too much of your time attempting to conserve, you may become a prisoner to your own material possessions. Wealth is a kind of energy as well, and we create what we express.',
    meaningReversed: 'When reversed, the Four of Pentacles veers sharply into the negative meanings of the card. Instead of being protective you become greedy, and you succumb to stinginess. You are haunted by certain fears of poverty which compels you to be nothing but materialistic. You are incredibly self-protective and defensive in terms of materialistic things, and you are not opening up to trust other people out of fear that they may be taking them away. On the other side, you might actually be spending too much money, and you need to start getting a proper hold of your actual financial resources. In any case, the card is capable of inducing both positive and negative associations, and you need to be very accountable and considerate if you get the Four of Pentacles in a reading.',
    meaningLoveUpright: 'Your relationship can be clingy and even suffocating, with the Four of Pentacles tarot love meaning. Relationships with this card can be filled with jealousy and possessiveness, which can slowly deteriorate even the happiest of loves. There are likely issues with insecurity or fear involved, and lovers may have to take some time to untangle these issues before they drive away their partner. If you’re single, there is likely you’re still holding onto something from your past romances; whether it is grudges, resentment or the dream of an ex returning to your life. These things need to be resolved before you can truly be open to another lover again.',
    meaningLoveReversed: 'Past insecurities may be healing now, allowing you or your lover to be less jealous and possessive. The reversed Four of Pentacles love meaning can therefore signal that the relationship can move forwards without being hindered by past wounds. If you’re single, it may be that you are ready to finally open your heart to new love, and have let go of something that has prevented you from letting your romantic life flourish.',
    meaningCareerUpright: 'You have finally found some stability in your career right now, with the Four of Pentacles appearing in your work spread. If you’ve struggled in the past to find this stability, or if the job is new to you, it may be that you’re still a bit insecure about your role. This can make you guarded, uneasy and perhaps even paranoid. This can do you more harm than good if you let it go too far. You may find it hard to collaborate and work as a team, feeling protective of your ideas, and worried that others may get the credit that rightfully belongs to you. These things do happen, address them, but don’t let yourself be consumed by them. \n' +
      '\n' +
      'Sometimes this card can also mean you are remaining in an unfulfilling job just to collect your paycheck. This job may be stable, but you may truly hate it there.  ',
    meaningCareerReversed: 'The reversed Four of Pentacles may be a little tricky to interpret. Positive associations suggest that your warmhearted and generous nature at work can be a powerful asset for you. You are readily available to help others and give credit where credit is due. Alternatively, you may instead be making risky decisions and careless of the consequences. Avoid trying to do the flashiest project, or shoot for the most ambitious, irrational goal right now, as it can land you in trouble rather than help you.  ',
    index: 67
  },
  {
    name: 'Three of Pentacles',
    description: 'The Three of Pentacles displays a young apprentice who works in a cathedral. In front of him, there are two others, a priest and a nobleman of some sort, that are holding plans of the cathedral on a piece of parchment. We can tell from the way the apprentice has raised his head that he is discussing his progress on building the cathedral. The two others are keenly listening to him in order to more clearly understand what is needed of them and how they can provide guidance. Despite the apprentice being less experienced, the two others listen to him because they know his ideas and his experience are fundamental in the successful completion of the whole building. The Three of Pentacles therefore represents the coming together of different kinds of knowledge in order to build something together. ',
    keywordsGeneralUpright: [
      'teamwork',
      'shared goals',
      'collaboration',
      'apprenticeship',
      'effort',
      'pooling energy'
    ],
    keywordsGeneralReversed: [
      'lack of cohesion',
      'lack of teamwork',
      'apathy',
      'poor motivation',
      'conflict',
      'ego',
      'competition'
    ],
    keywordsLoveUpright: [
      'doing projects with partner',
      'feeling like a team',
      'love at work / creative hobbies'
    ],
    keywordsLoveReversed: [
      'conflicts in practical life',
      'not being a good teammate in love'
    ],
    keywordsCareerUpright: [
      'working as team',
      'collaborates with others',
      'diverse skill sets and opinions'
    ],
    keywordsCareerReversed: [ 'stress and frustration amongst colleagues', 'office politics' ],
    meaningUpright: 'The threes in the tarot represent the successful completion of a goal - it takes the sources of energy in the ace and the twos and adds a foundational factor, and usually involves a group of some sort. In this scenario, the upright three of pentacles meaning is that there is a successful achievement of all the requirements to pursue your business, deal, venture or any other kind of endeavor. Successful projects usually require different kinds of expertise, and at this moment, the Three of Pentacles means that all the skills required are coming together. In short, you are enjoying enjoying working together as part of a team, and also in the initial success of this bigger project.\n' +
      '\n' +
      'The three pentacles reveals a successful beginning towards achieving your goals, it is a sign of encouragement that you should press on with the same effort without giving up. You may struggle to accomplish your goals as an individual, but the Three of Pentacles also teaches people not ignore the talents of the others that surround you. You need the collaboration of others, with diverse viewpoints, experiences and expertise to accomplish something more than you could have ever dreamed of.',
    meaningReversed: 'The Three of Pentacles reversal meaning indicates that there is lack of team work; it shows that people are working against each other and undermining the project along the way. There seems to be too much competition between them - each person is trying to display superiority. This result to scarcity of resources - too many people are viewing their project partners as competitors.\n' +
      '\n' +
      'When you are in such a team, it is good to ensure that you try as much as possible to inspire camaraderie. With this constant bickering, it is hard for the projects in the reversed Three of Pentacles to come into completion. You may find that people are not listening to others, and everyone is working for themselves. This difference in motives and ambitions yields complications. If you can be the first to reach out and give everyone a chance to be heard and considered, perhaps this project has a chance to move forward.',
    meaningLoveUpright: 'Love and teamwork can come hand in hand with the Three of Pentacles tarot love meaning. If you’re in a relationship, you may find it particularly pleasurable to work on projects together with your lover; couples can learn more about one another and deepen their trust by developing plans for the future together, working on their home, or collaborating on creative projects. By coming together as a team, the two of you are likely to also feel supported as partners, with unique talents and weaknesses that create a harmonious balance. If you’re single, you may find that love comes through collaboration at work or through your creative hobbies.',
    meaningLoveReversed: 'The reversed Three of Pentacles tarot love meaning can point to a couple that is struggling to work together practically. While the emotions may be there, they have not translated into effort or action. All love requires work, as well as desire. Being together as a couple often means being able to trust your partner to be your teammate, and your fellow collaborator on the long journey of life. How do the two of you split chores? How do you split finances? How about emotional labor? One person in the relationship may be putting in all the work, while the other is taking things for granted. Make sure that both people in your relationship are playing the role of good teammate.',
    meaningCareerUpright: 'The Three of Pentacles suggests that you are pooling your experience and skills together with a larger group to accomplish shared goals. Collaboration may be very important to your success now, and it can be that your projects will require cohesion among people with very different skill sets, experiences, ideas and processes. You’ll have to work hard to make sure that these diverse opinions are all focused towards accomplishment. Keep in mind the greater goal; this will help you all come together instead of arguing. Support your teammates and trust their expertise, while sharing your own unique perspective. \n' +
      '\n' +
      'This card can also indicate a period of learning and building your qualifications. You’re likely to deal with your new challenges well. ',
    meaningCareerReversed: 'When it comes to work, conflict between your colleagues and yourself may be creating stress and frustration. The people that are meant to be your partners are creating more headaches for you, instead of helping you. Coworkers or collaborators may be more self-interested than working for the greater good. There can be competitiveness for resources or attention; everyone wants to be the star. Different teams may be attempting to undermine each other rather than actually listen to what the other needs. Communication errors can be commonplace as well. The reversed Three of Pentacles can also suggest that your studies are not going well; there may be a lack of effort or motivation to complete your goals. Are you truly challenging yourself?  ',
    index: 66
  },
  {
    name: 'Two of Pentacles',
    description: 'The Two of Pentacles card depicts a man who is dancing as he is juggling two large coins. The pentacles are surrounded by the infinity sign that denotes that the person can handle all the issues the come his way and he can manage his life with grace. In the background, you will notice that there are two ships that are riding the giant waves, and they reinforce the balancing act that the man has to face - he is in rough and choppy waters, but manages to stay afloat. The Two of Pentacles depicts the usual ups and downs that occur in one’s life. Despite all the chaos that surrounds him, the man lives a very carefree life as he dances, and handles all that comes to him with joy.',
    keywordsGeneralUpright: [
      'balancing resources',
      'adaptation',
      'resourcefulness',
      'flexibility',
      'stretching resources'
    ],
    keywordsGeneralReversed: [
      'imbalance',
      'unorganized',
      'overwhelmed',
      'messiness',
      'chaos',
      'overextending'
    ],
    keywordsLoveUpright: [ 'balancing love / work / family', 'adapting to changes in love' ],
    keywordsLoveReversed: [ 'neglecting love', 'neglecting partner', 'not focused on love' ],
    keywordsCareerUpright: [ 'juggling work projects', 'being resourceful at work' ],
    keywordsCareerReversed: [
      'being overworked',
      'too many projects',
      'things falling through cracks'
    ],
    meaningUpright: 'The Two of Pentacles is a card about balance - the coins are displayed in a manner that is precarious, any small change in wind or weight can tip and send them falling. For those that may have more coins to go around, they can afford to be less careful, but at this moment things may be tight. Wealth too, is a kind of energy, and it is the kind whose goings in and goings out are easiest and most tangible to see. \n' +
      '\n' +
      'There is a possibility that you are trying hard to keep the two aspects of your life in a perfect and delicate balance. This could be your career, money, love and health. The balancing act depicted in the card suggests that there are two major factors that you are deeply concerned about. It is time for you to step back to have a better perspective of the situation. While you may initially think it will save you time, multi-tasking may just worsen the situation. Cut down on your tasks and concentrate on these two factors that are troubling you.\n' +
      '\n' +
      "You've done a good job keeping things stable, for you seem to be able to adapt well to all the changes that ask you to continually re-balance.\n" +
      '\n' +
      "When it comes to love, the Two of Pentacles is associated with your inability to provide the energy and time required to make your partner happy. Your partnership should be your main priority, but with all the madness in other areas of your life, you are finding it hard to devote your attention to your loved ones. With regards to finances, you should pay heed on the bottom line. You should have a clear picture on your financial state. Plan your finances accordingly, control your expenditures and increase your stream of income to create a solid foundation for your future. In terms of health, this card is asking you to find a balance between your own well-being and your responsibilities. It's easy to make yourself the last priority when you have so many things happening around you. ",
    meaningReversed: 'When the Two of Pentacles is in reversed position, it can mean that you are trying to juggle much too many things in your life. You need to take at least a short break to eliminate the stress. In case you are feeling that you can’t handle everything, you need to consider your own well-being and provide yourself with a time to breathe. In your work, the Two of Pentacles reversal can be a positive omen. Avoid committing to a lot of things since it will overwhelm you.In your finances, you need to learn how to live in your capacity. The Two of Pentacles reversal meaning reminds you to be aware of your income and expenditures since overspending can become a large issue, especially when you are being pulled in many directions.',
    meaningLoveUpright: 'You’ll need to put on a balancing act with the Two of Pentacles tarot love meaning. This card generally appears when you have many responsibilities you’ll need to take care of, and love may be the last thing on your mind. You may be feeling strained, juggling your relationship, career and family issues. All things require effort, and if you consider your relationship important, be careful to not neglect your partner. If you’re single right now, you may have to make some careful calculations about whether you are ready practically for love right now. You may need to decide what is most important to you, and make some choices to prioritize or de-prioritize romance.',
    meaningLoveReversed: 'You may find it difficult to keep your balancing act going, when the reversed Two of Pentacles appears in a love tarot reading. With so many conflicts and demands on you, you may not even know that your partner is feeling neglected. It seems like everything is a bigger priority than they are, and there may be some resentment as they feel they are being taken for granted. If you’re single, this card can suggest that you may have to make a choice between two potential lovers, or that you are too busy and overwhelmed to make romance a priority in your life right now. Take your time; return when you are ready to make room in your busy life for love.',
    meaningCareerUpright: "You may be juggling many projects right now at work, when you draw the Two of Pentacles in a career tarot reading. This is likely to be a more hectic time than usual, and things are either dumped on you at the last minute, that weren't’ meant to be your responsibility, or you have been accepting them in order to attain a better position. Others may be impressed by how much you’re able to handle, and just how resourceful you are. Ideally, this is just a temporary state. Be wary that you don’t accept more work than you can handle, or that coworkers and bosses get used to giving you all the work that nobody wants to do. If this continues, make sure you get compensated adequately for it! Sometimes, this card can also point towards balancing your career goals with other aspects of your life. ",
    meaningCareerReversed: 'Are you taking on too many projects right now? Have you been just saying “yes” when your boss asks you to do something, even though you don’t have the time? Deadlines may be looming, and the pressure is ever increasing. Your work life can be creating considerable stress for you now. Now is the time to stand up for yourself, ask for help, renegotiate deadlines and prioritize your work. If you’re not careful, things could be falling through the cracks, creating more trouble for you. You are only human, and the faster your boss or colleagues understand this, the better it is for everyone.',
    index: 65
  },
  {
    name: 'Ace of Pentacles',
    description: "In this card, there is a single mysterious hand that comes out of the clouds. In the hand is what looks like a gold coin with a pentagram engraved on its surface. This pentacle is associated with the element of earth, and seen as a sign of wealth and all things material and earthly. Below the hand is a garden which appears to be flourishing with flowers and other kinds of vegetation - giving off the aura of fertility, growth and prosperity. The mountain represents the ambition required to drive one's search for the pentacle. The flowing creek seem to indicate that emotions are flowing towards this ambition. ",
    keywordsGeneralUpright: [
      'new opportunities',
      'resources',
      'abundance',
      'prosperity',
      'security',
      'stability',
      'manifestation'
    ],
    keywordsGeneralReversed: [
      'missed chances',
      'scarcity',
      'deficiency',
      'instability',
      'stinginess',
      'bad investments'
    ],
    keywordsLoveUpright: [
      'steady loving relationship',
      'abundance and prosperity in love',
      'privileged couple'
    ],
    keywordsLoveReversed: [ 'loss of emotional stability', 'money issues in relationship' ],
    keywordsCareerUpright: [ 'new work or business opportunities' ],
    keywordsCareerReversed: [ 'missed work opportunities', 'invested in wrong career' ],
    meaningUpright: 'The aces in the tarot are all indicative of new beginnings. When you draw any of them, it means that you are at a point in your life where a new cycle is beginning - you are about to start afresh.\n' +
      '\n' +
      'Because the suit of pentacles is primarily concerned with all things material (not just financial, but also with the sensual), this reset could manifest itself as a new career, the undertaking of a new venture, or the start of putting more care into your health. Wherever this beginning takes place, the Ace of Pentacles assures that what is to come will bring great abundance and opportunity. \n' +
      '\n' +
      'To see the Ace of Pentacles indicates a seed being planted in the material world, in your feelings of security and stability. Like a seed, this opportunity must also be nurtured, and sometimes invested in with energy, time or funds. Watering this seed has the potential to be very rewarding - for anything that is grown on this energy is meant to be stable, secure and give a good yield. Prosperity is coming your way.One also has to make sure that they are psychologically prepared for the opportunities that are appearing. To be able to harvest the gift of the pentacles, we need to be filled with the calm that stability brings - this is a kind of spiritual prosperity, if you will. This kind of mindset can mean we become open to trying new things and not sticking to the old, washed out routine.',
    meaningReversed: 'Though the Ace of Pentacles usually heralds an opportunity of some sort that would lead to great gains, to see it reversed can mean that this might be a poor investment, requiring much more resources than you had initially reserved - or alternatively, you might be missing your chance.\n' +
      '\n' +
      'When one gets a reversed Ace of Pentacles, it may mean that they are about to face hard financial times as well as a lot of elusive opportunities. At this time, you are being advised against taking large financial risks and to think all your choices through when you are given a deal. It might also be a good time for an individual to seek advice from others and avoid making rushed decisions since the time isn’t just right. It wouldn’t be a good time for one to jump into a new job or business opportunity - especially if the main motivation for joining is to pursue prospects of higher financial gain. It might just be an illusion that can lead to your downfall.',
    meaningLoveUpright: 'A love that is loyal, lasting and practical is suggested by this card. The pentacles are related to the element of earth, which gives relationships a steady, generous, and reliable quality. Couples may find that their relationships give them a feeling of stability and security, and its influence gives them the confidence to take risks and explore. This gives lovers a feeling of independence, and allows each to thrive as individuals, while bringing more back to the relationship. Relationships may feel prosperous and abundant, and you and your lover may feel lucky and privileged to enjoy life together. If you’re single, make sure to take care of your practical life as well, as this will give you the foundation you need to find a love that can flourish.',
    meaningLoveReversed: 'The reversed Ace of Pentacles Tarot Love Meaning can suggest that a relationship that once gave you a sense of stability may instead be making you feel anxious and vulnerable. There may be concerns about finances that are creeping into the relationship, which can make the two of you feel unstable. Sometimes, this can be alleviated with an honest discussion and a game plan moving forward. Other times, the material or practical worries that you are dealing with now can be temporary, and solved with some careful budgeting. If you’re not in a relationship, be wary of people that seem selfish, greedy or willing to take advantage of you. This card can also simply signal missed romantic opportunities.',
    meaningCareerUpright: 'New opportunities are available to you now, that can secure you a better job, or a higher position in your existing company. Should you take your chances, and work hard, you may be rewarded with a promotion, a business venture, or a job that truly fulfills you. Since it’s an Ace, this card signals beginnings, and these changes can mark the start of a new adventure or era for you. Good energy is coming your way; you should welcome it like a breath of fresh air. ',
    meaningCareerReversed: 'Did you feel like you missed your chance to get that promotion you have been coveting? There is likely to be some sort of feeling of instability or missed opportunities with the reversed Ace of Pentacles. You may not feel like you’re doing well in your job, and you may be paranoid about getting fired for poor performance. Some of this may be impostor syndrome, but some concerns may be real. You’ll need to take a realistic look at yourself. You may also be feeling as though you haven’t spent your time wisely, and made some bad decisions in your career path. You haven’t invested in a career that has brought you material and emotional rewards. It’s not too late to change that; think more about what you’d like to do.',
    index: 64
  }
];

export default LabrynthosData;