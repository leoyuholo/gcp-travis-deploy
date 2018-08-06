gcloud beta functions deploy \
                    travisPubSub \
                    --source https://source.developers.google.com/projects/rumourshub-dev/repos/gcp-travis-deploy/moveable-aliases/test/paths/ \
                    --trigger-resource travis-deploy \
                    --trigger-event google.pubsub.topic.publish
