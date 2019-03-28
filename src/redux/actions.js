export const POST_YOSEGAKI = 'POST_YOSEGAKI'

export function post_yosegaki (name, text) {
  console.log(name, text)
  return {
    type: POST_YOSEGAKI,
    name,
    text
  }
}