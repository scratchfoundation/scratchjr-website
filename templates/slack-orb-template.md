### Slack Orb Message Template

This is just an example file. If you need to update the actual Slack Orb template you can use the json in the document to test it out. The final output should be stored as an environment variable in CircleCI. ScratchJR templates are stored in the `slack-notifications` context.

You can also interactively build your own templates using the [SlackAPI Block Kit Builder.](https://app.slack.com/block-kit-builder/T02902ZME#%7B%22blocks%22:%5B%7B%22type%22:%22section%22,%22text%22:%7B%22type%22:%22mrkdwn%22,%22text%22:%22Hello%22%7D%7D%5D%7D)


`SLACK_SCRATCHJR_SUCCESS`<br>
`SLACK_SCRATCHJR_FAIL`

```
{
    "blocks": [
        {
            "type": "header",
            "text": {
            "type": "plain_text",
            "text": ":rage1: :rage3: :rage4: Scratch Jr. Web Site Build Failed",
            "emoji": true
            }
        },
        {
            "type": "section",
            "text": {
            "type": "mrkdwn",
            "text": "This is a Public Service Announcement from your build on CircleCI.\nYour build failed on *$(date +'%m/%d/%Y %T')*"
            }
        },
        {
            "type": "divider"
        },
        {
            "type": "section",
            "fields": [
            {
                "type": "mrkdwn",
                "text": ":octocat: *Branch*: $CIRCLE_BRANCH"
            },
            {
                "type": "mrkdwn",
                "text": "*Commit*: $CIRCLE_SHA1"
            }
            ],
            "accessory": {
            "type": "image",
            "image_url": "https://assets.brandfolder.com/otz5mn-bw4j2w-6jzqo8/original/circle-logo-badge-black.png",
            "alt_text": "CircleCI logo"
            }
        },
        {
            "type": "actions",
            "elements": [
            {
                "type": "button",
                "text": {
                "type": "plain_text",
                "text": "View Job"
                },
                "url": "${CIRCLE_BUILD_URL}"
            }
            ]
        }
        ]
        }
        - slack/notify:
        event: always
        custom: |
        {
        "blocks": [
            {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": ":doge_cool: :sunglasses: Scratch Jr. Website Build Succeeded!",
                "emoji": true
                }
            },
            {
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": "This is a Public Service Announcement from your build on CircleCI.\nThe build completed on *$(date +'%m/%d/%Y %T')*"
            }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "fields": [
                    {
                    "type": "mrkdwn",
                    "text": ":octocat: *Branch*: $CIRCLE_BRANCH"
                    },
                    {
                    "type": "mrkdwn",
                    "text": "*Commit*: $CIRCLE_SHA1"
                    },
                ],
            "accessory": {
                "type": "image",
                "image_url": "https://assets.brandfolder.com/otz5mn-bw4j2w-6jzqo8/original/circle-logo-badge-black.png",
                "alt_text": "CircleCI logo"
            }
        },
        {
        "type": "actions",
        "elements": [
            {
            "type": "button",
            "text": {
                "type": "plain_text",
                "text": "View Job"
            },
            "url": "${CIRCLE_BUILD_URL}"
            }
        ]
        }
    ]
}
```
