import Button from "../CustomButton";

export const buttonToDisplayTop = [
  {
    title: "<Button />",
    button: <Button />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button className="isFocus" />,
  },
  {
    title: "<Button variant=”outlined” />",
    button: <Button variant="outlined" color="primary" />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button variant="outlined" color="primary" isFocus />,
  },
  {
    title: "<Button variant=”text” />",
    button: <Button variant="text" color="primary" disableShadow />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button variant="text" color="primary" isFocus disableShadow />,
  },
  {
    title: "<Button disabledShadow />",
    button: <Button disableShadow color="primary" />,
  },
  {
    title: "",
  },
  {
    title: "<Button disabled />",
    button: <Button disabled />,
  },
  {
    title: "<Button variant=”text” disabled />",
    button: <Button variant="text" disabled disableShadow />,
  },
  {
    title: "<Button startIcon=”phone” />",
    button: <Button color="primary" startIcon="phone" />,
  },
  {
    title: "<Button startIcon=”phone” />",
    button: <Button color="primary" endIcon="phone" />,
  },
];

export const buttonToDisplayBottom = [
  {
    title: "<Button size=”sm” />",
    button: <Button size="sm" color="primary" />,
  },
  {
    title: "<Button size=”md” />",
    button: <Button size="md" color="primary" />,
  },
  {
    title: "<Button size=”lg” />",
    button: <Button size="lg" color="primary" />,
  },
  {
    title: "",
  },
  {
    title: "<Button color=”default” />",
    button: <Button color="default" />,
  },
  {
    title: "<Button color=”primary” />",
    button: <Button color="primary" />,
  },
  {
    title: "<Button color=”secondary” />",
    button: <Button color="secondary" />,
  },
  {
    title: "<Button color=”danger” />",
    button: <Button color="danger" />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button color="default" isFocus />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button color="primary" isFocus />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button color="secondary" isFocus />,
  },
  {
    title: "&:hover, &:focus",
    button: <Button color="danger" isFocus />,
  },
];
