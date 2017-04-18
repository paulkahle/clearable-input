# Suprematism Clearable Input

An Angular 2 clearable input component.


#### Installation
```bash
npm i -S CINBCUniversal/suprematism-clearable-input
```
Until it is published to npm, point to github. A consequence of this is that
built files must be checked-in. When we publish to npm with `npm publish`,
there is a prehook to build the files and a posthook to delete them
(so only source files are saved in git). For now, after doing development,
we must manually run the publish prehook and save the files.


#### View
- [Hosted on Github Pages](https://cinbcuniversal.github.io/suprematism-clearable-input/)
- Run the example locally with `npm run example`


## Component

#### `supre-clearable-input`
A component for an input control that displays a clear button to easily clear the value.
This component implements ControlValueAccessor and can be used with the Angular Form API.

#### Options
- `type: string`: Type of input: text, number, email, etc.
- `value: string`: Input value.
- `placeholder: string`: Placeholder text.
- `search: boolean`: If true displays a search icon.

#### Events
- `valueChange: string`: Event when any change is made to the input.

#### Example
```
<supre-clearable-input
  type="text"
  placeholder="Enter Search"
  [value]="myValue"
  [search]="true"
  (valueChange)="myValue = $event"
  >
</supre-clearable-input>
```
