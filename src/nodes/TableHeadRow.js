import { Node, mergeAttributes } from '@tiptap/core'

export default Node.create({
	name: 'tableHeadRow',
	content: 'tableHeader*',
	tableRole: 'row',

	addOptions() {
		return {
			HTMLAttributes: {},
		}
	},

	parseHTML() {
		return [
			{ tag: 'tr' },
		]
	},

	renderHTML({ HTMLAttributes }) {
		return ['tr', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
	},

	toMarkdown(state, node) {
		state.write('|')
		state.renderInline(node)
		state.ensureNewLine()
		state.write('|')
		node.forEach(cell => {
			state.write(state.repeat('-', cell.textContent.length + 2))
			state.write('|')
		})
		state.ensureNewLine()
	},

})
