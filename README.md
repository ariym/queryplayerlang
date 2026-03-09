# qpl – queryplayerlangauge

## Tag Type

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


## Tag (instance)

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