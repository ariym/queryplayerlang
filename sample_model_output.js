// whisperx
const transcript = [
  {
    speech: "Hello, everyone. Welcome to our meeting today.",
    speaker: "Joey Diaz",
    start: 0.0,
    end: 2.5
  },
  {
    speech: "We'll be discussing the quarterly results.",
    speaker: "Joey Diaz",
    start: 3.0,
    end: 5.1
  },
  {
    speech: "Thank you! The numbers look promising.",
    speaker: "Lee Syatt",
    start: 5.2,
    end: 7.8
  },
  {
    speech: "Let's go over the highlights.",
    speaker: "Lee Syatt",
    start: 8.0,
    end: 10.0
  }
];


// auditok
const audio_events = [
  {
    start: 0.0,
    stop: 2.5
  },
  {
    start: 3.0,
    stop: 5.1
  },
  {
    start: 5.2,
    stop: 7.8
  },
  {
    start: 8.0,
    stop: 10.0
  }
];

// PySceneDetect (scenedetect)
const scene_events = [
  {
    start: 0.0,
    end: 2.5
  },
  {
    start: 2.5,
    end: 5.2
  },
  {
    start: 5.2,
    end: 8.0
  },
  {
    start: 8.0,
    end: 10.0
  }
]


// todo: forget which model this is
const sentiment = [
  {
  speaker: "Joey Diaz",
  sentiment: "positive",
  start: 0.0,
  end: 2.5
},
{
  speaker: "Lee Syatt",
  sentiment: "negative",
  start: 5.2,
  end: 7.8
},
{
  speaker: "Joey Diaz",
  sentiment: "neutral",
  start: 3.0,
  end: 5.1
},
{
  speaker: "Lee Syatt",
  sentiment: "positive",
  start: 8.0,
  end: 10.0
},
{
  speaker: "Joey Diaz",
  sentiment: "positive",
  start: 0.0,
  end: 2.5
}

]