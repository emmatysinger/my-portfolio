
<svelte:head>
	<title>Contact me</title>
</svelte:head>

<h1>Contact Me</h1>
<form action="mailto:emma.tysinger@gmail.com" enctype="text/plain">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="subject">Subject:</label>
    <input type="text" id="subject" name="subject">

    <label for="body">Message:</label>
    <textarea id="body" name="body"></textarea>

    <button type="submit">Submit</button>
</form>

