# topicos-telematica
¿CUAL ES LA PROBLEMÁTICA QUE QUIERE RESOLVER?

Para este proyecto se desarrolló una aplicación IoT web que permite el registro periódico de sensores dentro de una empresa, la problemática que se intenta resolver es la gran dificultad y consumo de tiempo que presenta el registro manual de los sensores, con el propósito de mejorar la productividad de la organización, se desarrolló esta aplicación que permitirá el registro periódico automatizado.

¿CUALES SON LOS REQUISITOS FUNCIONALES DE LA APP?

El sistema debe permitir registrar los datos proporcionados por sensores de temperatura, humedad y GPS desde un dispositivo arduino.

El sistema debe permitir a los usuarios visualizar los datos proporcionados por los sensores de temperatura, humedad y GPS desde un dispositivo arduino.

El sistema debe permitir a los usuarios realizar un registro manual de los datos proporcionados por los sensores de temperatura, humedad y GPS desde un dispositivo arduino.

El sistema debe permitir a los usuarios editar y eliminar los datos que considere pertinentes.

El sistema debe permitir usuarios ingresar al sistema a través de un login.

El sistema debe almacenar el e-mail y contraseña de los usuarios.

¿CUALES SON LOS REQUISITOS NO FUNCIONALES DE LA APP?

El sistema debe registrar menos de 2 fallas/hora, con un entrenamiento base de 2 horas(Eficiencia) Métrica: Fallas/hora.

El sistema debe ajustarse a las relaciones de aspecto(16:9, 17:9, 18:9) y resoluciones(480p-4K)(Portabilidad) Métrica: Relación y resolución.

El sistema debe ser compatible con la última versión de Google Chrome, Mozilla Firefox, Opera. Debido a que estos son los navegadores web más comunes.(Portabilidad)

El sistema debe estar disponible el 99% (712.8 horas) del tiempo mensual, el 1% restante se empleará para mantenimiento.(Disponibilidad) Métrica:Horas

¿QUÉ TECNOLOGÍA DE DESARROLLO UTILIZÓ?

En el backend implementé node.js con mongo.db, para el frontend utilicé Angular. Implementé el Full Stack MEAN: MEAN es desarrollo full-stack en JavaScript, es decir, es el conjunto de tecnologías necesarias para el desarrollo de todas las capas de una aplicación web con JavaScript, que integra mongo, angular, express y node.

¿CUALES SON Y CUAL ES LA ESPECIFICACIÓN DE LOS SERVICIOS API REST DEL BACKEND?

Las rutas implementadas en el backend de la aplicación fueron para usuarios y sensores, estas permiten controlar las funcionalidades del Login y gestión de los sensores respectivamente. Se crearon 4 rutas para los sensores(sensor.js), todas se acceden mediante la dirección raíz, por los métodos put, get post y delete. El método get obtiene las medidas de los sensores, el método post permite crear medidas de los sensores(en caso de que un usuario quiera ingresar los datos obtenidos por los sensores manualmente), el método put permite actualizar y editar las medidas y el método delete eliminarlas, se agregaron estas funcionalidades pensando en una sesión de administrador que esté autorizado para realizar estos cambios. Se crearon tres rutas para los usuarios, una ruta de signIn y SignUp ambas con métodos post, que permiten a los usuarios autenticarse en la página, y una ruta private que recibe los tokens generados para cada usuario.

¿CÓMO REALIZÓ LA AUTENTICACIÓN DE LOS SERVICIOS API REST?

Para la realización de este proyecto implementé autenticación mediante tokens con jwt-simple(jsonWebTokens), esta permite generar un token para cada usuario.El formato de un JWT está compuesto por 3 strings separados por un punto, La primera parte es la cabecera del token, la segunda parte es el Payload está compuesto por los llamados JWT Claims donde irán colocados la atributos que definen el token, la tercera y última parte del JSON Web Tokenes la firma que está formada por los anteriores componentes (Header y Payload) cifrados. Para la mejorar la seguridad de autenticación de los usuarios implementé encriptación de contraseñas mediante bcrypt-nodejs.

¿CUALES SON LAS PRINCIPALES DIFICULTADES QUE TUVO AL DESARROLLAR EL PROYECTO?

7.1 POR DESCONOCIMIENTO DE LA TECNOLOGÍA?

Una de las principales dificultades que tuve fue la utilización del framework angular, ya que por desconocimiento de la tecnología presenté varios errores durante la implementación del proyecto.

7.2 ¿QUÉ CONCEPTOS O FUNDAMENTOS NO SABE PARA PODER DESARROLLAR ESTE PROYECTO?

Antes de la realización del proyecto, no sabía como utilizar el framework angular, y tampoco como utizar tokens para la autenticación de servicios apirest.
Debo mejorar mis  habilidades en la utilización del framework angular. Presenté dificultades en la utilización de tokens para realizar la autenticación de los usuarios.

¿CUALES FUERON LOS PRINCIPALES APRENDIZAJES DEL PROYECTO 1?

Considero que uno de los principales aprendizajes que obtuve con la realización de este proyecto fueron los conocimientos adquiridos en el manejo del framework angular,además, logré identificar a cabalidad las capas del patrón mvc para cada uno de los frameworks implementados, tanto en el backend como el frontend.
