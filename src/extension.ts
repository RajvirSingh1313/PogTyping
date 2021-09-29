// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { TypingPanel } from "./TypingPanel";
import { SidebarProvider } from "./SidebarProvider";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarProvider(context.extensionUri);

  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider("pogtyping-sidebar", sidebarProvider)
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("pogtyping.refresh", async () => {
      // TypingPanel.kill();
      // TypingPanel.createOrShow(context.extensionUri);

      await vscode.commands.executeCommand("workbench.action.closeSidebar");
      await vscode.commands.executeCommand("workbench.view.extension.pogtyping-sidebar-view");

      // setTimeout(() => {
      //   vscode.commands.executeCommand(
      //     "workbench.action.webview.openDeveloperTools"
      //   );
      // }, 500);
    })
  );
}


export function deactivate() { }
