Steps to run the app:
1. Install git & docker 
2. run:

```
git clone git@github.com:mikicho/intsights-dashboard.git
cd intsights-dashboard
docker-compose --log-level ERROR up -d --build
```

To stop the container run: `docker-compose stop`