<script lang='ts'></script>

<style></style>

<button on:click={() => {
    tsvscode.postMessage({
        type:"openTypingPanel",
        value:"info message"
    })
}}>Start A Solo Typing Test</button>