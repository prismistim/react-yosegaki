export const POST_YOSEGAKI = 'POST_YOSEGAKI'

export function post_yosegaki (description, name) {
  console.log(description, name)
  return {
    type: POST_YOSEGAKI,
    description,
    name
  }
}