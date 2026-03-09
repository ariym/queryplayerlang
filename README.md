# qpl – queryplayerlangauge

## Data Types

### TagType

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
        label: primitive | @tagtype_name // @ signifies tagtype name
        speech: string,
        speaker: speaker
    }
}
```

### Tag

instance of a TagType.

- tagtype: tagtype_name
- body: matches tagtype schema
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

### Segment

Context for a tag.

- filePath
- start: timestamp in seconds
- end: timestamp in seconds
- tag

Example:

```
tagtype = {
    filePath: "/Users/orwell/Movies/ct_walken.mp4",
    start: 32,
    end: 39
}
```

## Data Examples

TagTypes:
* speaker
