

### Run PythonTutor on Grow page (PythonTutor was created by Philip Guo)

If you want to run locally on your own computer, to run Python visualizations try:

```
pip install bottle # make sure the bottle webserver (http://bottlepy.org/) is installed
cd OnlinePythonTutor/v5-unity/
python bottle_server.py
```

You should see the visualizer at: http://localhost:8003/visualize.html

... and the live programming environment at: http://localhost:8003/live.html 

NOTE: Grow will use the back-end provided by the experimental feature live (http://localhost:8003/live.html)

Wishlist (in Spanish):

- Cambiar estilos CSS para que combinen con el Landing Page. Estuve editando todas las fuentes CSS para cambiar el Live.html pero no he encontrado cúales se relacionan con dicho archivo
- Por ahora ``` http://localhost:8003/live.html``` corre localmente ejecutando ```py bottle_server.py``` (usando Python 3.x.x), si queremos correrlo en la página. Por ahora he visto que no se puede desplegar ya que Github Pages desplega contenido estatico y se necesita correr ```pip```  (ref:https://stackoverflow.com/questions/24296873/is-it-possible-to-run-python-in-the-web-with-github-io), sin embargo no he consultado a fondo este aspecto


However, it can be hard to run your own visualizer locally for
non-Python languages, since there are complex dependencies in v4-cokapi/ that
I haven't yet cleanly packaged up. By default, the local version you run will
*call my own server to run the non-Python backends*, so please be mindful of
your bandwidth usage.

For further directions, see [Overview for Developers](v3/docs/developer-overview.md) or explore the [rest of the docs](v3/docs/).


### Acknowledgments

For code or security contributions:
- Irene Chen - experimental holistic visualization mode - v3/js/holistic.js
- John DeNero - helping with the official Python 3 port, bug fixes galore
- Mark Liffiton - localStorage bug fix
- Chris Meyers - custom visualizations such as v3/matrix.py and v3/htmlFrame.py
- Brad Miller - adding pop-up question dialogs to visualizations, other bug fixes
- David Pritchard and Will Gwozdz - Java visualizer and other frontend enhancements
- Peter Robinson - v3/make_visualizations.py
- Peter Wentworth and his students - working on the original Python 3 fork circa 2010-2011
- Security tips and vulnerability reports: Aaron E. (https://arinerron.com), Chris Horne (https://github.com/lahwran), Joshua Landau (joshua@landau.ws), David Wyde (https://davidwyde.com/)

For user testing and feedback from instructors' perspectives:
- Ned Batchelder
- Jennifer Campbell
- John Dalbey
- John DeNero
- Fredo Durand
- Michael Ernst
- David Evans
- Paul Gries
- Mark Guzdial
- Adam Hartz
- Sean Lip
- Fernando Perez
- Tomas Lozano-Perez
- Bertram Ludaescher
- Brad Miller
- Rob Miller
- Peter Norvig
- Andrew Petersen
- David Pritchard
- Suzanne Rivoire
- Guido van Rossum
- Peter Wentworth
- David Wilkins

... and many, many more!
