import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogService {
  logs: Log[];

  private logSourse = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });
  selectedLog = this.logSourse.asObservable();

  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Auto development setup",
        date: new Date("02/12/2020 12:22:11"),
      },
      {
        id: "2",
        text: "Authentication done",
        date: new Date("02/12/2020 12:22:11"),
      },
      {
        id: "3",
        text: "Security issues fixed",
        date: new Date("02/12/2020 12:33:11"),
      },
    ];
  }

  getLogs() {
    return of(
      this.logs.sort((a, b) => {
        return b.date - a.date;
      })
    );
  }

  setFormLog(log: Log) {
    this.logSourse.next(log);
  }
}
