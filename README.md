# Shopping Cart example in Angular

Web application that uses the Angular framework.

## Requisites

To compile or use the application you must install:

* [Node.js and npm](http://nodejs.org)
* [Bower](http://bower.io)
* [Git](https://git-scm.com/)

You can verify if that software is installed using

```bash
npm --version
bower --version
git --version
```

## Compiling the Project (in the command line)

You can compile the application using Maven. 
In the command line, you can issue the following:

```bash
mvn package
```

When running this command a couple of things happen:
* ``bower install`` will be run, and the javascript dependencies are downloaded
* All the other standard maven phases.

## Running the Project

The resulting 
application is stored in the ``target`` directory. 
You can install the resulting .war file in a Java Application Server.

## Using Netbeans

If you are using Netbeans, you can import the project and run the application using the included Glassfish.
* You can clone the project using the Git tools in the ``Team`` Menu
* Then, you can run the project using the ``Run`` or the ``Debug`` button in the toolbar.
