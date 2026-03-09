# qpl – queryplayerlangauge

## TagType

- name
- description
- schema
- program

Example:

```
tagtype = {
    name: "transcript",
    description: "diarized speech from whisperx",
    schema: {
        speech: string,
        speaker: string
    }
}
```

## Tag

Instance of a TagType.

- tagtype: tagtype_name
- body: matches tagtype schema
- segment: segment_id
- label: optional for user to specify something

Example:

```
tagtype = {
    tagtype: "transcript"
    body: {
        speech: "what's up podcasta villas",
        speaker: "Joey Diaz"
    },
    label?: string
}
```

## Segment

Tags use Segments for storing file and start/end times. A segment itself does not include any information about the tags that reference it.

- filePath
- start: timestamp in seconds
- end: timestamp in seconds

Example:

```
tagtype = {
    filePath: "/Users/orwell/Movies/ct_walken.mp4",
    start: 32,
    end: 39
}
```