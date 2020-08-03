import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  constructor() {}
}
