## Todo List

This is the skill test for developer positions in Ensolvers.

### Considerations

Ours recomendations is you create a Python' virtual enviroment one so you shouldn't install all libraries localy. The application has to folder, "back" where is the backend and "front" where is the user interface

- For install the virtual enviroment execute in a terminal:

```
pip install pipenv
```

- In our root write:

```
pipenv shell
```

We are in a virtual env now we can install the Django and the node_module dependencies.

#### Install Django

```
pip3 install django | pip install django
```

#### Install rest_framework

```
pip3 install djangorestframework | pip install djangorestframework
```



By last we'll create Django's superuser:

```
./manage.py createsuperuser
```


Now we can move to the following path:


~/ensolvers/skillTest/back/abm

```

From there excute:

```
python manage.py runserver
```

Perfect you just ran the backend server!



After this, in a new terminal we'll move to:

```
~/ensolvers/skillTest/front/todo
```

Inside here we are going to install the node_modules dependencies:

```
npm install
```

After that excute:

```
npm start
```

Allways ensure that both server (back and front) are running in the same Python virtual env.

> As a warning we ask you to consider adding an extension to your browser that allows Cross-origin resource sharing requests
