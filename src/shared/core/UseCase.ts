export interface UseCase<Request = unknown, Response = unknown> {
  execute(data: Request): Promise<Response> | Response;
}
