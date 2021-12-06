Se puede encontrar la aplicación en https://mymedicalappointments.herokuapp.com/

En ocasiones hay que recargar la página varias veces hasta que Heroku pueda servirla.
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Cómo usar la aplicación:
- Se puede acceder a la sección de Doctors para que los nuevos usuarios se den una idea de los servicios que se ofrecen.
- Se puede acceder a la sección de Login para iniciar sesión.
  - Aquí se puede ingresar el email y contraseña de un usuario existente o utilizar Google (hay que recargar la página manualmente, ya que Heroku no redirecciona correctamente).
  - También se puede dar click en Sign up si el usuario no tiene una cuenta.
  - En la sección de Sign up se mostrará un formulario que hay que llenar completamente, después se puede dar click en Sign up para crear la cuenta (como paciente).
  - También se puede crear una cuenta con Google.

Dependiendo de si el usuario es un paciente o un doctor, la experiencia será diferente.
- Como doctor:
  - Se puede utilizar la siguiente cuenta como ejemplo: gooddoctor@test.com | doc123
  - En la sección de Appointments se pueden ver todos las citas que hay registradas.
  - Al dar click en una cita se mostrarán los detalles de esta, y dentro de aquí también se pueden subir archivos de interés.
  - Se pueden ver a los doctores registrados en la sección de Doctors. Al dar click en uno se mostrarán los detalles, pero no se puede crear una nueva cita.
  - Se pueden ver todos los clientes en la sección de Clients, y al dar click en uno se mostrarán sus detalles.
  - En la sección de Chat se puede dar click en una cita relacionada con el usuario para hablar con el usuario relacionado a esta.

- Como usuario:
  - Se puede utilizar la siguiente cuenta como ejemplo: spider@test.com | spider123
  - En la sección de Appointments se pueden ver las citas relacionadas con este paciente.
  - Al dar click en una cita se mostrarán los detalles de esta, y dentro de aquí también se pueden subir archivos de interés.
  - Se pueden ver a los doctores registrados en la sección de Doctors. Al dar click en uno se mostrarán los detalles y dando click en Appointment se puede crear una nueva cita.
  - En la sección de Chat se puede dar click en una cita relacionada con el usuario para hablar con el doctor relacionado a esta.
