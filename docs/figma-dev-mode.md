# Figma Dev Mode: A Quick Guide

The Figma Dev Mode is a powerful feature designed to enhance the workflow between designers and developers. Follow these steps to enable and utilize it effectively.

## Table of Contents

- [Figma Dev Mode: A Quick Guide](#figma-dev-mode-a-quick-guide)
  - [Table of Contents](#table-of-contents)
  - [1. Open the Figma File](#1-open-the-figma-file)
  - [2. Locate the Toolbar](#2-locate-the-toolbar)
  - [3. Enable Dev Mode](#3-enable-dev-mode)
  - [4. Access the Inspect Menu](#4-access-the-inspect-menu)
    - [Try Out Components in the Playground](#try-out-components-in-the-playground)
    - [Dynamic Properties and Code Connect](#dynamic-properties-and-code-connect)
    - [Published Code in the Inspect Menu](#published-code-in-the-inspect-menu)
  - [5. Leverage Plugins for Enhanced Functionality](#5-leverage-plugins-for-enhanced-functionality)
    - [Viewing Stories in Storybook](#viewing-stories-in-storybook)
  - [6. Add Measurements and Annotate Designs](#6-add-measurements-and-annotate-designs)
    - [Adding Measurements](#adding-measurements)
    - [Annotating Designs](#annotating-designs)
  - [7. Inspect Properties in Dev Mode](#7-inspect-properties-in-dev-mode)
    - [Viewing Properties](#viewing-properties)
  - [References](#references)

## 1. Open the Figma File

Start by opening the relevant Figma file that you want to work with. Ensure you have the necessary permissions to access and edit the file.

## 2. Locate the Toolbar

At the bottom of the Figma interface, you will see a toolbar. This toolbar contains various tools and settings that are essential for customizing your workspace.

![Toolbar](assets/dev-mode/figma-toolbar.png)

## 3. Enable Dev Mode

Within the toolbar, you will find an option to enable Dev Mode. Click on this option to activate the developer-specific features. Once enabled, you will gain access to additional tools that simplify the process of inspecting designs, copying code snippets, and extracting assets.

![Activate Dev Mode](assets/dev-mode/activate-dev-mode.png)

## 4. Access the Inspect Menu

After enabling Dev Mode, navigate to the right side of the interface where you will find the Inspect Menu. This menu provides detailed information about the selected component, including properties, CSS code, and assets.

![Inspect Menu](assets/dev-mode/inspect-menu.png)

### Try Out Components in the Playground

Within the Inspect Menu, you can use the Playground feature to experiment with the selected component. By adjusting the properties, you can see how the component’s appearance changes in real time. This is particularly useful for fine-tuning designs and ensuring consistency.

![Playground](assets/dev-mode/playground.png)

### Dynamic Properties and Code Connect

When using Code Connect, uploaded code can dynamically update in the Playground if it utilizes properties linked from Figma. This allows for real-time testing and visualization of how dynamic properties affect the component’s behavior and appearance. It’s a seamless way to bridge the gap between design and implementation.

This is an example for dynamic properties:

![Dynamic Properties](assets/dev-mode/dynamic-properties.png)

### Published Code in the Inspect Menu

Code published through Code Connect is also accessible in the Inspect Menu. Here, developers can review the integrated code and see how it can be utilized directly from the installed package. This streamlined approach ensures clarity and ease when working with shared components in a codebase.

![Connected Code](assets/dev-mode/connected-code.png)

## 5. Leverage Plugins for Enhanced Functionality

In addition to the Inspect Menu, various plugins can be utilized to extend functionality. For example, the Storybook plugin allows you to connect with the integrated code and interactively test pre-built components. By linking Storybook to your connected codebase, you can explore how components behave, validate their implementation, and ensure alignment between design and code.

![Plugins](assets/dev-mode/plugins.png)

### Viewing Stories in Storybook

Opening Storybook enables you to see the pre-written stories for each component. These stories showcase different states and variations of the component, which you can interactively test. This hands-on approach helps in validating the behavior and appearance of components within their intended context.

![Storybook in Figma](assets/dev-mode/storybook-figma.png)

## 6. Add Measurements and Annotate Designs

Dev Mode also allows you to add measurements and annotations to your designs. This feature is useful for providing detailed specifications and notes directly within the design file.

### Adding Measurements

To add measurements, select the component or layer you want to measure. Then, click on the measurement tool in the toolbar. You can measure distances between elements, as well as the dimensions of individual components.

![Measurements](assets/dev-mode/measurements.png)

### Annotating Designs

Annotations can be added to provide additional context or instructions. Select the annotation tool from the toolbar and click on the area of the design where you want to add a note. You can customize the annotation text and style to suit your needs.

![Annotations](assets/dev-mode/annotations.png)

For more detailed instructions, refer to the [Figma Help Center](https://help.figma.com/hc/en-us/articles/20774752502935-Add-measurements-and-annotate-designs-in-Dev-Mode).

## 7. Inspect Properties in Dev Mode

Inspecting properties in Dev Mode allows you to view detailed information about the components and layers in your design. This feature is essential for developers who need to understand the specifics of a design for implementation.

### Viewing Properties

To inspect properties, follow these steps:

1. **Enable Dev Mode**: Ensure that Dev Mode is enabled in your Figma interface.
2. **Select an Object**: Click on the component or layer you want to inspect.
3. **Open the Inspect Menu**: Navigate to the right side of the interface to find the Inspect Menu.

In the Inspect Menu, you will see various properties of the selected object, including:

- **Dimensions**: Width and height of the object.
- **Position**: X and Y coordinates on the canvas.
- **Spacing**: Margins and padding.
- **Styles**: Colors, fonts, and effects.
- **CSS Code**: Automatically generated CSS code for the selected object.

For more detailed instructions, refer to the [Figma Help Center](https://help.figma.com/hc/en-us/articles/22012921621015-Guide-to-inspecting).

## References

- [Guide to Dev Mode](https://help.figma.com/hc/en-us/articles/15023124644247-Guide-to-Dev-Mode)
- [Code Connect Documentation](https://www.figma.com/code-connect-docs/)
- [Code Connect for React](https://www.figma.com/code-connect-docs/react/)
- [Code Connect for Storybook](https://www.figma.com/code-connect-docs/storybook/)
