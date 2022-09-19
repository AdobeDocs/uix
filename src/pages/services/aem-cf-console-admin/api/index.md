# AEM Content Fragments Console Extension Points

Learn what is possible to extend and customize in AEM Content Fragments Console.

The AEM Content Fragments Console is dedicated to managing, searching for, and creating Content Fragments. It has been optimized for use in a Headless context, but is also used when creating Content Fragments for use in page authoring. 

Extensions can customize navigation, add own actions on Content Fragments and implement custom UI via Modals etc.

## Header Menu

Header Menu is area above Content Fragments list meant for action items unrelated to any particular content fragment, for example creating or importing content fragments.

![Header Menu](header-menu.png)

Header menu can be customized via methods defined in `headerMenu` namespace. 

First, define your button in getButton method:

```JavaScript
uix.register({
    headerMenu: {
        getButton: () => ({
            id: "import",
            label: "Import",
            icon: "OpenIn",
        })
    }
})
```

This method must define button unique ID, label and icon.

Now, you can define button's callback in onClick method.

```JavaScript
uix.register({
    headerMenu: {
        getButton: () => ({
            id: "import",
            label: "Import",
            icon: "OpenIn",
        })
        onClick: () => {
            console.log('Import button has been pressed');
        }
    }
})
```

The callback is invoked when user clicks on the button and does not receive any extra parameters.

<InlineAlert variant="warning" slots="text" />

At the moment an extension can only define a single button.

## Action Bar

Action Bar is area above content fragment list meant for action items which can be executed on selected content fragments, for example: editing, deleting, exporting or cloning. Action Bar appears over Header Menu when one or multiple content fragments are selected.

![Action Bar](action-bar.png)

Header menu can be customized via methods defined in `actionBar` namespace. 

First, define your button in getButton method:

```JavaScript
uix.register({
    actionBar: {
        getButton: () => ({
            id: "export",
            label: "Export",
            icon: "OpenIn",
        })
    }
})
```

This method must define unique ID, button label and icon displayed next to it. Now, you can define button's callback in onClick method.

```JavaScript
uix.register({
    actionBar: {
        getButton: () => ({
            id: "export",
            label: "Export",
            icon: "OpenIn",
        })
		onClick: (selection) => {
            console.log('Export button has been pressed', {selection});
        }
    }
})
```

The callback is invoked when user clicks on the button and receives list of content fragments selected in the list.

<InlineAlert variant="warning" slots="text" />

At the moment an extension can only define a single button.

## Modals

Odin UI provides API for showing modal dialogs with custom UI define by an extension. These modals can be triggered by a click on the button or other events. Modal API is defined in the `modal` namespace. 

Content of the modal is rendered in an iframe with source defined by extension. Before showing modal you should create a page which renders Modal UI. This UI should use Adobe Spectrum UI library to provide consistent experiense to the user.

In order to display modal dialog extension must call `showUrl` method in `modal` namespace.

```JavaScript
apis.modal.showUrl({title: "Translate Fragments", url: "/modals/translate"})
```
