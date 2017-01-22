Template.nova_tarefa.events({

	"submit form": function(e, template){
		e.preventDefault();
		
		var input = $("#tarefa");
		var nome = input.val();

		Meteor.call("adiciona", {nome: nome});
		input.val("");
	}

})