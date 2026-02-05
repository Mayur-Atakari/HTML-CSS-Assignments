function addField() {
  const type = document.getElementById("fieldType").value;

  const label = document.getElementById("fieldLabel").value;

  const form = document.getElementById("formPreview");

  const Label = document.createElement("label");
  Label.innerText = label;

  const input = document.createElement("input");
  input.type = type;

  form.appendChild(Label);
  form.appendChild(input);
  form.appendChild(document.createElement("br"));

  document.getElementById("fieldLabel").value = "";
}
